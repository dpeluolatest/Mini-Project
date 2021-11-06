import { Given, When, Then } from "@wdio/cucumber-framework";
import Appliance from "../pageobjects/appliance.page";
import HomePage from "../pageobjects/home.page";

//Search stores by Store Department
When(/^I search by store department$/, async (table) => {
  //await HomePage.closePopUp();
  const tableRow = table.hashes();
  for (const ele of tableRow) {
    console.log("Searching Item , " + (await ele.Deparment));
    await HomePage.searchItem(await ele.Department);
    await Appliance.selectCategory(await ele.Category);
    await Appliance.selectCategory(await ele.SubCategory);
    await Appliance.selectProduct(await ele.Product);
  }
});

Then(/^I shall verify the product displayed$/, async (table) => {
  const tableRow = table.hashes();
  for (const elem of tableRow) {
    expect(await browser.getUrl()).toHaveTextContaining(elem.Name);
    expect(browser.getTitle).toHaveTextContaining(elem.Name);
  }
  await Appliance.SiteLogo.scrollIntoView();
  await Appliance.SiteLogo.click();
});
