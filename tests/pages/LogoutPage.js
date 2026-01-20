const { BasePage } = require('./basePage');

class LogoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.logoutLink = 'a:has-text("Log Out")';
    this.loginButton = 'input[value="Log In"]';
    this.usernameInput = 'input[name="customer.username"]';
  }

  async logout() {
    await this.click(this.logoutLink);
    await this.page.waitForLoadState('networkidle');
  }

  async verifyLogoutSuccess() {
    return await this.isVisible(this.loginButton);
  }

  async verifyLoginPageDisplayed() {
    return await this.isVisible(this.usernameInput);
  }
}

module.exports = { LogoutPage };
