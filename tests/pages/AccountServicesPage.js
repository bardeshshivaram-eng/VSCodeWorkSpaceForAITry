const { BasePage } = require('./basePage');

class AccountServicesPage extends BasePage {
  constructor(page) {
    super(page);
    this.openNewAccountLink = 'a:has-text("Open New Account")';
    this.accountsOverviewLink = 'a:has-text("Accounts Overview")';
    this.accountServicesMenu = 'div:has-text("Account Services")';
  }

  async clickOpenNewAccount() {
    await this.click(this.openNewAccountLink);
    await this.page.waitForLoadState('networkidle');
  }

  async clickAccountsOverview() {
    await this.click(this.accountsOverviewLink);
    await this.page.waitForLoadState('networkidle');
  }

  async verifyAccountServicesVisible() {
    return await this.isVisible(this.accountServicesMenu);
  }

  async navigateToAccountServices() {
    await this.page.goto('https://parabank.parasoft.com/parabank/services');
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = { AccountServicesPage };
