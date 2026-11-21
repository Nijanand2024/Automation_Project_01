// write a test for login functionality for the application URL: https://www.saucedemo.com/
import { test, expect } from '@playwright/test';

test('Login functionality test', async ({ page }) => {
  // Navigate to the application URL
  await page.goto('https://www.saucedemo.com/'); 
  await expect(page).toHaveTitle('Swag Labs');
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();   

});