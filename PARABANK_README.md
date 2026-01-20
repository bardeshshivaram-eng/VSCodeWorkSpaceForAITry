# ParaBank Test Automation - Page Object Model

A comprehensive JavaScript-based Playwright test automation suite for [ParaBank](https://parabank.parasoft.com) demonstrating best practices in Page Object Model (POM) design patterns.

## 🎯 Project Overview

This project implements a complete end-to-end test automation suite for the ParaBank financial demo application.

## 📦 What's Included

- **6 Page Object Classes** - Professional separation of concerns
- **2 Test Files** - Main workflow test + usage examples
- **HTML Reporting** - Detailed test execution reports
- **Multi-Browser Support** - Chromium, Firefox, WebKit, and mobile browsers
- **Comprehensive Documentation** - Complete guides and examples

## 🚀 Quick Start

```bash
npm install
npm run test:headed
```

## 🔑 Test Credentials

```
Username: john
Password: demo
```

## 💫 Main Workflow Test

1. Login with john/demo credentials
2. Navigate to Open New Account
3. Create a Savings account
4. Navigate to Accounts Overview
5. Verify the new account appears
6. Click on the account to view details
7. Verify account details are displayed
8. Logout

## 🌟 Key Features

- ✅ **Page Object Model Pattern** - Clean separation of concerns
- ✅ **Complete Workflow Test** - Full user journey from login to logout
- ✅ **Error Handling** - Robust error handling with fallback selectors
- ✅ **Best Practices** - DRY principle, clear naming, comprehensive documentation

## 🚀 Available Commands

```bash
npm install          # Install dependencies
npm test             # Run all tests
npm run test:headed  # See browser while running
npm run test:debug   # Debug mode
npm run test:ui      # Interactive UI mode
npx playwright show-report  # View test report
```

Happy testing! 🚀
