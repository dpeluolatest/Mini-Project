import { Given, When, Then } from "@wdio/cucumber-framework";


import ProductPage from "../pageobjects/product.page";



/* When(/^user enters featured program as (.+) in Search field and click Search Button$/, async (searcheditem, callback) {
    
}); */

Then(/^It should very some stats and log results$/, async () => {
    const productTag = await ProductPage.productTitle;
    const productName  = await productTag.getText();
    console.log('The name of the Product is:', productName);
    const AverageRating = await ProductPage.averageRating.getText();
    console.log('The product Rating is;', AverageRating);
    await ProductPage.logReviews();
});

