import test, { expect } from "@playwright/test";

test(`clicking 'Home' from home page does not change page`, async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Home" }).click();

  await expect(page).toHaveURL("/");
});

test(`clicking 'About' from home page navigates to about page`, async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "About" }).click();

  await expect(page).toHaveURL("/about");
});

test(`clicking 'Home' from about page navigates to home page`, async ({
  page,
}) => {
  await page.goto("/about");
  await page.getByRole("link", { name: "Home" }).click();

  await expect(page).toHaveURL("/");
});

test(`clicking 'About' from about page does not change page`, async ({
  page,
}) => {
  await page.goto("/about");
  await page.getByRole("link", { name: "About" }).click();

  await expect(page).toHaveURL("/about");
});
