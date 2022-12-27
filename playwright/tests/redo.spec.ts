import { test, expect } from '@playwright/test';
const LOCAL = 'http://localhost:4200';
const SUBMIT_REDO = '#submit-redo-button';
const CREATE_REDO = '#create-redo-button';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto(LOCAL);
  //====== Test Submit
  await page.click(CREATE_REDO);
  await page.click(SUBMIT_REDO);
  await page.waitForTimeout(60000 * 20);
});
