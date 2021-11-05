import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page";
import CommonPage from "../pageobjects/common.page";
import SearchPage from "../pageobjects/search.page";
import allureReporter from "@wdio/allure-reporter";
import ProductPage from "../pageobjects/product.page";
import AppliancePage from "../pageobjects/appliance.page";

// search by SKU
When(/^I search by product sku$/, async (table) => {
  const tableRow = table.hashes();
  for (const ele of tableRow) {
    console.log("Searching Item , " + (await ele.SKU));
    await HomePage.searchItem(await ele.SKU);
  }
});

Then(
  /^I shall verify the ProductName and Price is displayed$/,
  async (table) => {
    const tableRow = table.hashes();
    for (const element of tableRow) {
      expect(browser.getUrl).toHaveTextContaining(element.ProductName);
      expect(browser.getTitle).toHaveTextContaining(element.ProductName);
      await HomePage.siteLogo.click();
    }
  }
);
