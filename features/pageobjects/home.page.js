
 // *============================ Home page containing specific selectors and methods ================================* 
 

class HomePage {

 // ---------------------------------- define selectors using getter methods ------------------------------------------*

    get siteLogo () { return $('.logo')}
    get btnCloseLoginModal(){return $('.email-submission-modal #Close_Cancel_Line')}
    get inputSearch () { return $('#gh-search-input') }
    get searchIcon () { return $('.header-search-icon') }

    
 // ------------------------------------- Home Page Methods ------------------------------------------------------------*
    

    async searchItem (SearchedItem) {
        await this.inputSearch.doubleClick();
        browser.keys("Delete");
        await this.inputSearch.waitForDisplayed();
        //await this.inputSearch.clearValue();
        await this.inputSearch.addValue(SearchedItem);
        await this.searchIcon.click();
    } 
    
}
export default new HomePage();