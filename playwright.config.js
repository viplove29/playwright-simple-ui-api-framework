require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    headless: true
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ]
});
