class CommonPage{
  async openHomePage() {
      await browser.url('https://bestbuy.com')
      
    }

}
export default new CommonPage();