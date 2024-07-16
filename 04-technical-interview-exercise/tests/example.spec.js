import { test, expect } from "@playwright/test";

const { test, expect } = require("@playwright/test");
const LOCAL_HOST_UTL = "http://localhost:3000";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

test("app shows random cat fact and image", async ({ page }) => {
  await page.goto(LOCAL_HOST_UTL);

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});