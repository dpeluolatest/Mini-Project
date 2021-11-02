//import Page from './page';
/**
 * Product page containing specific selectors and methods 
 */

 class ProductPage {
    //PageObject
    
    get averageRating () { return $('.ugc-c-review-average.order-1')}
    get productTitle() { return $('//h1') }
    get reviewTag() { return $('(//span[@class="v-m-right-xs"])[1]')}
    get reviewsHeading() { return $$('.c-section-title.review-title.heading-5 v-fw-medium')}
    get reviews () {return $$('.pre-white-space')}
    get specification () { return $('//span[normalize-space()="Specifications"]')}
    get text_Specification () { return $('//span[normalize-space()="Specifications"]')}
    get productSpecifications () { return $$('.category-wrapper.row')}
    get siteLogo () { return $('.logo')}
    
    
    //Actions

   /*  async logReviews() {
    await this.reviewTag.waitForClickable();
    await this.reviewTag.scrollIntoView();
    //await this.reviewTag.click()
    const review = await this.reviewTag;
    await browser.execute("arguments[0].click();", review);
        var i = 0;
        for(i=0; i<3; i++) {

    console.log(await this.Reviews[i].getText());
    AllureReporter.addAttachment(this.Reviews[i].getText(), ["text/plain"])
    }
    }  */

    getProductName = async() =>{
        const productTag = await this.productTitle;
        const productName  = await productTag.getText();
        return productName;
    }

    async getElementText(element) {
        const ele = element.getElementText()
        return ele;
    }

    async clickSpecification(){
        const review = await this.text_Specification;
    await browser.execute("arguments[0].click();", review);
    }
    
}
export default new ProductPage();