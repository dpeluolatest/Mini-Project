Feature: Search Functionality

    @TestCase1
    Scenario Outline: As a user, I can search by product
        Given I am on the home page
        # When I search with <SearchedItem> and click Search Button
        # And I filter by <Price>, <Color> and <Condition>
        # And user select a product with <ProductSKU> SKU
        # Then Product details is dis played
        When I search for products, apply filter and validate results   
            | SearchedItem | Price           | Color | Condition   | Product                                                                                          |
            | Television   | $1250 - $1499.99 | Black | Open-Box   | Samsung - 75" Class Q70A Series QLED 4K UHD Smart Tizen TV                                       |
            | Phone        | $750 - $999.99   | Blue  | New        | Apple - iPhone 13 5G 128GB - Blue (T-Mobile)                                                     |              
            | Watch        | $500 - $749.99   | Gold  | New        | Apple Watch Series 6 (GPS + Cellular) 44mm Gold Aluminum Case with Pink Sand Sport Band - Gold   |     
            #Then It should very some stats and log results



    @TestCase2
    Scenario: As a user, I can search by Brand

        Given user navigates to the website bestbuy.com
        When user enters a brand as <SearchedItem> in Search field and click Search Button
        And user select <Category> and <SubCategory>
        And user filter by <ScreenSize>, <StorageCapacity>
        And user select a product with <ProductSKU> SKU
        Then Product details is displayed

    Example:
            | SearchedItem | Category  | SubCategory | ScreenSize  | StorageCapacity | ProductSKU |
            | Samsung      | Computing | Laptops     | 12" - 14.9" | 500 GB and up   | 6457789    |


    @TestCase3
    Scenario: As a user, I can search by Store Department

        Given user navigates to the website bestbuy.com
        When user enters store Department as <SearchedItem> in Search field and click Search Button
        And user select <Category> and <SubCategory>
        And user filter by <Location> and press the Go button
        And user select a product with <ProductSKU> SKU
        Then Product details is displayed

    Example:
            | SearchedItem | Category                 | SubCategory                 | Location | ProductSKU |
            | Appliances   | Major Kitchen appliances | Shop  refrigerators on sale | 19152    | 6417768    |


    @TestCase4
    Scenario: As a user, I can search for Deals

        Given user navigates to the website bestbuy.com
        When user enters a deal type as <SearchedItem> in Search field and click Search Button
        And user select <Category> and <SubCategory>
        And user filter by <Price>
        And user select a product with <ProductSKU> as SKU
        Then Product details is displayed

    Example:
            | SearchedItem | Category     | SubCategory | Price        | ProductSKU |
            | Top Deals    | Black Friday | Headphones  | $50 - $74.99 | 6423274    |


    @TestCase5
    Scenario: As a user, I can search by Featured

        Given user navigates to the website bestbuy.com
        When user enters featured program as <SearchedItem> in Search field and click Search Button
        And user select <Category>
        And user filter by <Same-day pickup>
        And user select a product with <ProductSKU> SKU
        Then Product details is displayed

    Example:
            | SearchedItem | Category     | Get it Fast        | ProductSKU |
            | Gifts        | Unique Gifts | Same-days delivery | 6461348    |


