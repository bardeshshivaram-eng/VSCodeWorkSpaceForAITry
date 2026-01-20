# Playwright Testing Framework

This is a complete Playwright end-to-end testing framework setup.

## Installation

```bash
npm install
npx playwright install
```

## Project Structure

```
├── tests/
│   ├── example.spec.js      # Example test cases
│   ├── fixtures.js          # Custom test fixtures
│   └── pages/
│       └── basePage.js      # Page Object Model base class
├── playwright.config.js  # Playwright configuration
├── package.json          # Project dependencies
└── README.md             # This file
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (visible browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests with UI
```bash
npm run test:ui
```

### Run tests for specific browser
```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

## Configuration

Edit `playwright.config.js` to:
- Change test directory
- Configure browsers (Chromium, Firefox, WebKit)
- Set up mobile device testing
- Configure parallel execution
- Set base URL and other options

## Key Features

- ✅ Multi-browser testing (Chrome, Firefox, Safari)
- ✅ Mobile device testing support
- ✅ Parallel test execution
- ✅ HTML test reports
- ✅ Debug mode with Inspector
- ✅ Screenshot and video recording capabilities
- ✅ Trace collection for debugging failures

## Tips

1. Use `test.only()` to run a single test during development
2. Use `test.skip()` to skip a test
3. Use `test.describe()` to group related tests
4. Use `test.beforeEach()` and `test.afterEach()` for setup/teardown
5. View HTML reports: `npx playwright show-report`

## Documentation

- [Playwright Official Docs](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)
