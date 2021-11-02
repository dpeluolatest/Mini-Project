import { Given, When, Then } from "@wdio/cucumber-framework";

import ProductPage from "../pageobjects/product.page";
import allureReporter from '@wdio/allure-reporter'


/* Then(/^It should very some stats and log results$/, async () => {
    const productTag = await ProductPage.productTitle;
    const productName  = await productTag.getText()
    console.log('The name of the Product is:', productName);
    const AverageRating = await ProductPage.averageRating.getText();
    expect(AverageRating).toExist()
    console.log('The product Rating is;', AverageRating);
    allureReporter.addAttachment(`The Average rating of ${productName} is ${AverageRating}`);
    expect(await ProductPage.text_Specification).toExist();
    await ProductPage.reviewTag.waitForClickable();
    await ProductPage.reviewTag.scrollIntoView();
    const review = await ProductPage.reviewTag;
    await browser.execute("arguments[0].click();", review);
        var i = 0;
        for(i=0; i<3; i++) {
            allureReporter.addSeverity('Critical')
    console.log(await ProductPage.reviews[i].getText());
    allureReporter.addAttachment(await ProductPage.reviews[i].getText());
} 
});  */

