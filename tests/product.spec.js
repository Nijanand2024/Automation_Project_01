// write a test for adding a product to the cart
import {test, expect} from '@playwright/test';

test('Add product to cart', async ({ page }) => {
  // Navigate to the application URL
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Add a product to the cart
  await page.getByText('Sauce Labs Backpack').click();
  //await page.getByRole('button', { name: 'Add to cart' }).click();
  //await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('//button[@id="add-to-cart"]').click();

  // Verify the product is in the 
  // 
  await expect(page.getByText('1')).toBeVisible();
});
