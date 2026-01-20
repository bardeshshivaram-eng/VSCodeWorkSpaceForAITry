# ParaBank Page Object Model - JavaScript Implementation

## Overview
This is a complete Page Object Model (POM) implementation for the ParaBank (https://parabank.parasoft.com) website using Playwright with JavaScript.

## Page Objects

### 1. **LoginPage.js**
Handles ParaBank login functionality:
- `navigateToLogin()` - Navigate to ParaBank login page
- `login(username, password)` - Login with credentials
- `verifyLoginPage()` - Verify login page is displayed

### 2. **AccountServicesPage.js**
Manages account services navigation:
- `clickOpenNewAccount()` - Click to open new account
- `clickAccountsOverview()` - Navigate to accounts overview

### 3. **OpenNewAccountPage.js**
Handles new account creation:
- `selectAccountType(accountType)` - Select account type (0=Checking, 1=Savings)
- `clickOpenNewAccount()` - Submit account creation
- `getNewAccountNumber()` - Retrieve newly created account number

### 4. **AccountsOverviewPage.js**
Manages accounts overview page:
- `navigateToAccountsOverview()` - Navigate to overview
- `verifyAccountInList(accountNumber)` - Verify account exists
- `clickOnAccount(accountNumber)` - Click account to view details

### 5. **AccountDetailsPage.js**
Displays account details:
- `getAccountNumber()` - Get account number
- `getAccountType()` - Get account type
- `getAccountBalance()` - Get account balance

### 6. **LogoutPage.js**
Handles logout functionality:
- `logout()` - Click logout link
- `verifyLogoutSuccess()` - Verify user logged out

## Test Credentials
- Username: `john`
- Password: `demo`

## Quick Start

```bash
npm install
npm test
npm run test:headed
```
