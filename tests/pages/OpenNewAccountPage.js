const { BasePage } = require('./basePage');

class OpenNewAccountPage extends BasePage {
  constructor(page) {
    super(page);
    this.accountTypeDropdown = 'select[name="type"]';
    this.openAccountButton = 'input[value="Open New Account"]';
    this.successMessage = 'div#openAccountResult';
    this.pageHeading = 'h1';
  }

  async selectAccountType(accountType) {
    await this.page.selectOption(this.accountTypeDropdown, accountType);
  }

  async clickOpenNewAccount() {
    await this.click(this.openAccountButton);
    await this.page.waitForLoadState('networkidle');
  }

  async getNewAccountNumber() {
    await this.waitForElement(this.successMessage);
    const successText = await this.getText(this.successMessage);
    const accountNumberMatch = successText.match(/\d+/);
    return accountNumberMatch ? accountNumberMatch[0] : successText;
  }

  async verifyAccountOpenedSuccessfully() {
    return await this.isVisible(this.successMessage);
  }

  async verifyPageTitle() {
    const title = await this.getText(this.pageHeading);
    return title.includes('Open New Account');
  }
}

module.exports = { OpenNewAccountPage };
