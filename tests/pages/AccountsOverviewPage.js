const { BasePage } = require('./basePage');

class AccountsOverviewPage extends BasePage {
  constructor(page) {
    super(page);
    this.accountsTable = 'table';
    this.accountLinks = 'a.accountLink';
    this.pageHeading = 'h1';
  }

  async navigateToAccountsOverview() {
    await this.page.click('a:has-text("Accounts Overview")');
    await this.page.waitForLoadState('networkidle');
  }

  async getAccountRowByNumber(accountNumber) {
    return this.page.locator(`a:has-text("${accountNumber}")`);
  }

  async verifyAccountInList(accountNumber) {
    const accountLocator = this.getAccountRowByNumber(accountNumber);
    return await accountLocator.isVisible();
  }

  async clickOnAccount(accountNumber) {
    const accountLocator = this.getAccountRowByNumber(accountNumber);
    await accountLocator.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getAllAccountNumbers() {
    const accounts = await this.page.locator(this.accountLinks).allTextContents();
    return accounts;
  }

  async verifyPageTitle() {
    const title = await this.getText(this.pageHeading);
    return title.includes('Accounts Overview');
  }
}

module.exports = { AccountsOverviewPage };
