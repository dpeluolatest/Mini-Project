//Product page containing specific selectors and actions

class ProductPage {
  //PageObject

  get averageRating() {
    return $(".ugc-c-review-average.order-1");
  }
  get productTitle() {
    return $("//h1");
  }
  get reviewTag() {
    return $('(//span[@class="v-m-right-xs"])[1]');
  }
  get reviewsHeading() {
    return $$(".c-section-title.review-title.heading-5 v-fw-medium");
  }
  get reviews() {
    return $$(".pre-white-space");
  }
  get specification() {
    return $('//span[normalize-space()="Specifications"]');
  }
  get text_Specification() {
    return $('//span[normalize-space()="Specifications"]');
  }
  get productSpecifications() {
    return $$(".category-wrapper.row");
  }
  get siteLogo() {
    return $(".logo");
  }

  getProductName = async () => {
    const productTag = await this.productTitle;
    const productName = await productTag.getText();
    return productName;
  };

  async getElementText(element) {
    const ele = element.getElementText();
    return ele;
  }

  async clickSpecification() {
    const review = await this.text_Specification;
    await browser.execute("arguments[0].click();", review);
  }

  async getProductPrice(element) {
    const price = await element.getText();
    return price;
  }
}
export default new ProductPage();
