import { Given, When, Then} from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';
import CommonPage from '../pageobjects/common.page';
import SearchPage from '../pageobjects/search.page'
import ProductPage from '../pageobjects/product.page';

Given(/^I am on the home page$/, async () => {
   await  CommonPage.openHomePage();
   await HomePage.btnCloseLoginModal.waitForExist(15000);
   await HomePage.btnCloseLoginModal.click();
   expect(browser).toHaveTitle('Best Buy | Official Online Store | Shop Now & Save');
   console.log('The title is;', 'Best Buy | Official Online Store | Shop Now & Save');

});
 
/* When(/^I search for products, apply filter and validate results$/, async (table) => {

    console.log(" ==============  Inside Search =======================  ");

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
    
}); */

/* Then(/^It should very some stats and log results$/, async () => {
    const productTag = await ProductPage.productTitle;
    const productName  = await productTag.getText();
    console.log('The name of the Product is:', productName);
    const AverageRating = await ProductPage.averageRating.getText();
    console.log('The product Rating is;', AverageRating);
   //  await ProductPage.reviewTag.waitForClickable();
    //await ProductPage.reviewTag.scrollIntoView();
    //await ProductPage.reviewTag.click()
    //    var i = 0;
    //    for(i=0; i<3; i++) {

    //    console.log(await ProductPage.Reviews[i].getText()); 
    //}
    //await ProductPage.logReviews();
}); */



