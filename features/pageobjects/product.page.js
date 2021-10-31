//import Page from './page';
/**
 * Product page containing specific selectors and methods 
 */

 class ProductPage {
    /**
     * define selectors using getter methods
     */
    get averageRating () { return $('.ugc-c-review-average.order-1')}
    get productTitle() { return $('//h1') }
    get reviewTag() { return $('(//span[@class="v-m-right-xs"])[1]')}
    get reviewsHeading() { return $$('.c-section-title.review-title.heading-5 v-fw-medium')}
    get Reviews () {return $$('.pre-white-space')}
    

    /**
     * a method to search by entering search text and clicking the search icon
     */

    async logReviews() {
    await this.reviewTag.waitForClickable();
    await this.reviewTag.scrollIntoView();
    //await this.reviewTag.click()
    const review = await this.reviewTag;
    await browser.execute("arguments[0].click();", review);
        var i = 0;
        for(i=0; i<3; i++) {

    console.log(await this.Reviews[i].getText());
    }
    }
   
    
}
export default new ProductPage();