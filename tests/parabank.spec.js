const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { AccountServicesPage } = require('./pages/AccountServicesPage');
const { OpenNewAccountPage } = require('./pages/OpenNewAccountPage');
const { AccountsOverviewPage } = require('./pages/AccountsOverviewPage');
const { AccountDetailsPage } = require('./pages/AccountDetailsPage');
const { LogoutPage } = require('./pages/LogoutPage');

test.describe('ParaBank - Complete Account Management Flow', () => {
  let loginPage, accountServicesPage, openNewAccountPage, accountsOverviewPage, accountDetailsPage, logoutPage, newAccountNumber;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    accountServicesPage = new AccountServicesPage(page);
    openNewAccountPage = new OpenNewAccountPage(page);
    accountsOverviewPage = new AccountsOverviewPage(page);
    accountDetailsPage = new AccountDetailsPage(page);
    logoutPage = new LogoutPage(page);
  });

  test('Complete ParaBank Account Management Workflow', async ({ page }) => {
    await test.step('Step 1: Login to ParaBank with credentials', async () => {
      await loginPage.navigateToLogin();
      const isLoginPage = await loginPage.verifyLoginPage();
      expect(isLoginPage).toBeTruthy();
      await loginPage.login('john', 'demo');
      const url = page.url();
      expect(url).toContain('overview');
      console.log('✓ Successfully logged in to ParaBank');
    });

    await test.step('Step 2: Navigate to Open New Account', async () => {
      await accountServicesPage.clickOpenNewAccount();
      const isPageDisplayed = await openNewAccountPage.verifyPageTitle();
      expect(isPageDisplayed).toBeTruthy();
      console.log('✓ Successfully navigated to Open New Account page');
    });

    await test.step('Step 3: Create a Savings Account', async () => {
      await openNewAccountPage.selectAccountType('1');
      await openNewAccountPage.clickOpenNewAccount();
      const isSuccessful = await openNewAccountPage.verifyAccountOpenedSuccessfully();
      expect(isSuccessful).toBeTruthy();
      newAccountNumber = await openNewAccountPage.getNewAccountNumber();
      expect(newAccountNumber).toBeTruthy();
      console.log(`✓ Savings Account Created with Account Number: ${newAccountNumber}`);
    });

    await test.step('Step 4: Navigate to Accounts Overview', async () => {
      await accountsOverviewPage.navigateToAccountsOverview();
      const isPageDisplayed = await accountsOverviewPage.verifyPageTitle();
      expect(isPageDisplayed).toBeTruthy();
      console.log('✓ Successfully navigated to Accounts Overview');
    });

    await test.step('Step 5: Verify New Account in List and Open It', async () => {
      const isAccountVisible = await accountsOverviewPage.verifyAccountInList(newAccountNumber);
      expect(isAccountVisible).toBeTruthy();
      await accountsOverviewPage.clickOnAccount(newAccountNumber);
      console.log(`✓ Found and clicked on new account: ${newAccountNumber}`);
    });

    await test.step('Step 6: Verify Account Details Page', async () => {
      const isDetailsPage = await accountDetailsPage.verifyAccountDetailsPage();
      expect(isDetailsPage).toBeTruthy();
      const isAccountNumberCorrect = await accountDetailsPage.verifyAccountNumberDisplayed(newAccountNumber);
      expect(isAccountNumberCorrect).toBeTruthy();
      const accountType = await accountDetailsPage.getAccountType();
      const balance = await accountDetailsPage.getAccountBalance();
      console.log(`✓ Account Details Verified:\n  - Account Number: ${newAccountNumber}\n  - Account Type: ${accountType}\n  - Balance: ${balance}`);
    });

    await test.step('Step 7: Logout from ParaBank', async () => {
      await logoutPage.logout();
      const isLoggedOut = await logoutPage.verifyLogoutSuccess();
      expect(isLoggedOut).toBeTruthy();
      console.log('✓ Successfully logged out from ParaBank');
    });
  });

  test('Simple Login and Logout Test', async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
    await test.step('Login', async () => {
      await loginPage.navigateToLogin();
      await loginPage.login('john', 'demo');
      const url = page.url();
      expect(url).toContain('overview');
      console.log('✓ Successfully logged in');
    });
    await test.step('Logout', async () => {
      await logoutPage.logout();
      const isLoggedOut = await logoutPage.verifyLogoutSuccess();
      expect(isLoggedOut).toBeTruthy();
      console.log('✓ Successfully logged out');
    });
  });
});
