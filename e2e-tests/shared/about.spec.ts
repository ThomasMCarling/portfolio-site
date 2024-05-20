import { test, expect } from "@playwright/test";

const title = "About | Thomas Carling";
const pageHeading = "About me";
const url = "/about";

test(`has title ${title}`, async ({ page }) => {
  await page.goto(url);

  await expect(page).toHaveTitle(title);
});

test(`has heading ${pageHeading}`, async ({ page }) => {
  await page.goto(url);

  await expect(
    page.getByRole("heading", { level: 1, name: pageHeading }),
  ).toBeVisible();
});
