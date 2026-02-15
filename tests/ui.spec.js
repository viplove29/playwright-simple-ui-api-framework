require('dotenv').config();
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('SauceDemo Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.visit();

  await loginPage.login(
    'standard_user',
   'secret_sauce'
  );
  await expect(page).toHaveURL(/inventory/);
});
