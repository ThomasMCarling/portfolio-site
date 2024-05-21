import test, { expect } from "@playwright/test";
import { env } from "~/env";

test(`clicking code icon from home page navigates to github source code`, async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Source code" }).click();

  await expect(page).toHaveURL(RegExp(env.SOURCE_URL));
});

test(`opening link submenu and clicking 'LinkedIn' from home page navigates to my LinkedIn account`, async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "External links" }).click();
  await page.getByRole("link", { name: "LinkedIn" }).click();

  await expect(page).toHaveURL(RegExp(env.LINKEDIN_URL));
});

test(`opening link submenu and clicking 'GitHub' from home page navigates to my GitHub account`, async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "External links" }).click();
  await page.getByRole("link", { name: "GitHub" }).click();

  await expect(page).toHaveURL(RegExp(env.GH_URL), {});
});
