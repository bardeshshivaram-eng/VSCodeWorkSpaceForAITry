const { BasePage } = require('./basePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = 'input[name="customer.username"]';
    this.passwordInput = 'input[name="customer.password"]';
    this.loginButton = 'input[value="Log In"]';
    this.errorMessage = '.error';
    this.pageTitle = 'h1';
  }

  async navigateToLogin() {
    await this.navigate('https://parabank.parasoft.com');
    await this.page.waitForLoadState('networkidle');
  }

  async login(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
    await this.page.waitForLoadState('networkidle');
  }

  async isLoginErrorDisplayed() {
    return await this.isVisible(this.errorMessage);
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }

  async verifyLoginPage() {
    const title = await this.getTitle();
    return title.includes('ParaBank');
  }
}

module.exports = { LoginPage };
