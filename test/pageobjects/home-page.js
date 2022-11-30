class InventoryPage {

    get btnBurger () {
        return $('#react-burger-menu-btn')
    }

    get btnLogout () {
        return $('#logout_sidebar_link')
    }

    get btnAbout () {
        return $('#about_sidebar_link')
    }

    get filtersText () {
        return $('.active_option')
    }

    get btnFilters () {
        return $('.product_sort_container')
    }

    get OptionFilerNameAZ () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[1]')
    }

    get OptionFilerNameZA () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[2]')
    }

    get OptionFilerNameLowHigh () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[3]')
    }

    get OptionFilerNameHighLow () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[4]')
    }
    
    get inventoryImg () {
        return $('#item_4_img_link > img')
    }

    get addToCartButton () {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get removeFromCartButton () {
        return $('#remove-sauce-labs-backpack')
    }

    get cartButton () {
        return $('#shopping_cart_container')
    }

    get itemsInCart () {
        return $('.cart_item')
    }

    get itemHref () {
        return $('#item_4_img_link')
    }

    get itemTitleHref () {
        return $('#item_4_title_link')
    }

    get backToProducts () {
        return $('#back-to-products')
    }

    get continueBuying () {
        return $('#continue-shopping')
    }

    get checkoutButton () {
        return $('#checkout')
    }

    get continueStepOneButton () {
        return $('#continue')
    }

    get errorMsg () {
        return $('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]/h3')
    }

    get inputName () {
        return $('#first-name')
    }

    get inputLastName () {
        return $('#last-name')
    }

    get inputPostal () {
        return $('#postal-code')
    }

    get finishPurchaseButton () {
        return $('#finish')
    }

    get thankYouMessage () {
        return $('//*[@id="checkout_complete_container"]/h2')
    }

    get twitterBtn () {
        return $('//*[@id="page_wrapper"]/footer/ul/li[1]/a')
    }

    get facebookBtn () {
        return $('//*[@id="page_wrapper"]/footer/ul/li[2]/a')
    }

    get linkedinBtn () {
        return $('//*[@id="page_wrapper"]/footer/ul/li[3]/a')
    }
}

export default new InventoryPage();