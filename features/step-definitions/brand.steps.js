import { Given, When, Then } from "@wdio/cucumber-framework";
import StoreLocator from "../pageobjects/storelocator.page";
import HomePage from "../pageobjects/home.page";
import Brands from "../pageobjects/brand.page";

//Search stores by brand
When(/^I search by brand name$/, async (table) => {
  //await HomePage.closePopUp();
  const tableRow = table.hashes();
  for (const ele of tableRow) {
    console.log("Searching Item , " + (await ele.Brand));
    await HomePage.searchItem(await ele.Brand);
  }
});

Then(
  /^I can select category, sub category, then slect a name and verify the url$/,
  async (table) => {
    await Brands.selectCategory(table);
    await Brands.selectSubCategory(table);
    await Brands.SiteLogo.click();
  }
);
