import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page";
import CommonPage from "../pageobjects/common.page";
import SearchPage from "../pageobjects/search.page";
import allureReporter from "@wdio/allure-reporter";
import ProductPage from "../pageobjects/product.page";

// Search Steps

When(/^I search for products, apply filter and validate results$/,async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
      console.log("Searching Item , " + element.SearchedItem);
      await HomePage.searchItem(element.SearchedItem);
      await SearchPage.selectFilterByText(element.Price);
      await SearchPage.selectFilterByText(element.Color);
      await SearchPage.selectFilterByText(element.Condition);
      await SearchPage.getProductCount();
      await SearchPage.selectProduct(element.Product);
      const AverageRating = await ProductPage.averageRating.getText();
      expect(AverageRating).toExist();
      expect(await ProductPage.text_Specification).toExist();
      await ProductPage.reviewTag.waitForClickable();
      await ProductPage.reviewTag.scrollIntoView();
      const review = await ProductPage.reviewTag;
      await browser.execute("arguments[0].click();", review);
      var i = 0;
      for (i = 0; i < 3; i++) {
        allureReporter.addSeverity("Critical");
        console.log(await ProductPage.reviews[i].getText());
        allureReporter.addAttachment(await ProductPage.reviews[i].getText());
      }
      await HomePage.siteLogo.scrollIntoView();
      await HomePage.siteLogo.waitForClickable();
      await HomePage.siteLogo.click();
    }
  }
);

