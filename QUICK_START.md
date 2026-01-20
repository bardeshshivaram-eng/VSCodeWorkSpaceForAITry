# ParaBank POM - Quick Reference

## Created Files Structure

```
tests/
├── pages/
│   ├── LoginPage.js                    # Login functionality
│   ├── AccountServicesPage.js          # Account services menu
│   ├── OpenNewAccountPage.js           # New account creation
│   ├── AccountsOverviewPage.js         # View all accounts
│   ├── AccountDetailsPage.js           # Account details view
│   └── LogoutPage.js                   # Logout functionality
└── parabank.spec.js                    # Main test suite with 2 tests
```

## Quick Start

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run in headed mode (see browser)
npm run test:headed

# Run specific test file
npx playwright test tests/parabank.spec.js

# Run specific test
npx playwright test -g "Complete ParaBank Account Management Workflow"

# View test report
npx playwright show-report
```

## Test Credentials
- **Username:** john
- **Password:** demo

## Test Cases

### 1. Complete ParaBank Account Management Workflow
This is the main test that covers the entire user journey

### 2. Simple Login and Logout Test
Basic test for login/logout functionality
