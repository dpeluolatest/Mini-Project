import { Given, When, Then} from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';
import CommonPage from '../pageobjects/common.page';
import SearchPage from '../pageobjects/search.page';

/* When(/^I filter by (.+), (.+) and (.+)$/, async (Price, Color, Condition) => {
    await SearchPage.applyFilter(Price, Color, Condition)
});

When(/^user select a product with (.+) SKU$/, async (ProductSKU) => {
    await SearchPage.selectProduct(ProductSKU);
}); */

When(/^I search for products, apply filter and validate results$/, async (table) => {

    const tableRows = table.hashes();
    for (const element of tableRows) {
      console.log(element.SearchedItem);
      console.log(element.Price);
      console.log(element.Color);
      console.log(element.Product);
      console.log("Searching Item , "+element.SearchedItem);
      await HomePage.searchItem(element.SearchedItem);
      await SearchPage.selectFilterByText(element.Price);
      await SearchPage.selectFilterByText(element.Color);
      await SearchPage.selectFilterByText(element.Condition);
      await SearchPage.getProductCount();
      await SearchPage.selectProduct(element.Product);
    } 
    
});

