@TestCase2
    Scenario: As a user, I can search by Product SKU
    Given I navigates to the website bestbuy.com 
    W I search by product sku and I will see  
        | SKU      | Model                 | Price     |  
        | 6426710  | i3501-5573BLK-PUS     | $949.99   |
        | 6447114  | 82BH00DQUS/82BH0006US | $429.99   |
        | 6426710  | 82H801DQUS/82H8018SUS | $879.99   |
    
    
    @TestCase3
    Scenario: As a user, I can search for stores near me
    Given user navigates to the website bestbuy.com
    When user enters featured program as in Search field and click Search Button
        | SearchInput | ZipCode |
        | Stores      | 19152   |
    Then Product details is displayed
        | Model                 | Price     | 
        | i3501-5573BLK-PUS     | $949.99   |  
        | 82BH00DQUS/82BH0006US | $429.99   |
        | 82H801DQUS/82H8018SUS | $879.99   |



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


    @TestCase2
    Scenario: As a user, I can search by SKU

        Given user navigates to the website bestbuy.com
        When user enters featured program as <SearchedItem> in Search field and click Search Button
        And user select <Category>
        And user filter by <Same-day pickup>
        And user select a product with <ProductSKU> SKU
        Then Product details is displayed

    Example:
            | SearchedItem | Category     | Get it Fast        | ProductSKU |
            | Gifts        | Unique Gifts | Same-days delivery | 6461348    |

     
