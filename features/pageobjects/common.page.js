import HomePage from "./home.page";

class CommonPage {
  async openHomePage() {
    await browser.url("https://bestbuy.com");
  }
}
export default new CommonPage();
