const { BasePage } = require('./basePage');

class AccountDetailsPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageHeading = 'h1';
    this.accountDetailsTable = 'table';
    this.accountNumberCell = 'td:has-text("Account Number") + td';
    this.accountTypeCell = 'td:has-text("Account Type") + td';
    this.balanceCell = 'td:has-text("Balance") + td';
  }

  async getAccountNumber() {
    try {
      return await this.getText(this.accountNumberCell);
    } catch (e) {
      const value = await this.page.locator('text=/Account Number/i').first().locator('..').textContent();
      return value;
    }
  }

  async getAccountType() {
    try {
      return await this.getText(this.accountTypeCell);
    } catch (e) {
      return await this.page.locator('text=/Account Type/i').first().locator('..').textContent();
    }
  }

  async getAccountBalance() {
    try {
      return await this.getText(this.balanceCell);
    } catch (e) {
      return await this.page.locator('text=/Balance/i').first().locator('..').textContent();
    }
  }

  async verifyAccountDetailsPage() {
    const title = await this.getText(this.pageHeading);
    return title && title.includes('Account Details');
  }

  async verifyAccountNumberDisplayed(expectedAccountNumber) {
    const accountNum = await this.getAccountNumber();
    return accountNum && accountNum.includes(expectedAccountNumber);
  }
}

module.exports = { AccountDetailsPage };
