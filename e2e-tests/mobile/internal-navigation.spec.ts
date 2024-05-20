import test, { expect } from "@playwright/test";

test(`opening menu and clicking 'Home' from home page does not change page`, async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("link", { name: "Home" }).click();

  await expect(page).toHaveURL("/");
});

test(`opening menu and clicking 'About' from home page navigates to about page`, async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("link", { name: "About" }).click();

  await expect(page).toHaveURL("/about");
});

test(`opening menu and clicking 'Home' from about page navigates to home page`, async ({
  page,
}) => {
  await page.goto("/about");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("link", { name: "Home" }).click();

  await expect(page).toHaveURL("/");
});

test(`opening menu and clicking 'About' from about page does not change page`, async ({
  page,
}) => {
  await page.goto("/about");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("link", { name: "About" }).click();

  await expect(page).toHaveURL("/about");
});
