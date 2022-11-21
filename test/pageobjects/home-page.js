class InventoryPage {

    get btnBurger () {
        return $('#react-burger-menu-btn')
    }

    get btnLogout () {
        return $('#logout_sidebar_link')
    }
    
    get inventoryImg () {
        return $('#item_4_img_link > img')
    }

}

export default new InventoryPage();