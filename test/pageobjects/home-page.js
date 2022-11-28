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
}

export default new InventoryPage();