import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/home-page';

describe('My Login application', () => {
    beforeAll('Navigate to URL', () => {
        browser.url("https://www.saucedemo.com/");
    })
    it('should login with valid credentials(standard user)', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
    });
    it('Should be able to add 1 item and delete it from home page', async () => {
        await InventoryPage.addToCartButton.waitForDisplayed();
        await InventoryPage.addToCartButton.click();
        await InventoryPage.removeFromCartButton.waitForDisplayed();
        await InventoryPage.removeFromCartButton.click();
    });
    it('Should be able to add 1 item and delete it from home page and delete from cart and return', async () => {
        await InventoryPage.addToCartButton.waitForDisplayed();
        await InventoryPage.addToCartButton.click();
        await InventoryPage.cartButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await InventoryPage.removeFromCartButton.waitForDisplayed();
        await InventoryPage.removeFromCartButton.click();
        await InventoryPage.continueBuying.click();
    });
    it('Click on open an item image should go to item and return', async () => {
        await InventoryPage.itemHref.waitForDisplayed();
        await InventoryPage.itemHref.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        await InventoryPage.backToProducts.waitForDisplayed();
        await InventoryPage.backToProducts.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('Click on open an item title should go to item and return', async () => {
        await InventoryPage.itemTitleHref.waitForDisplayed();
        await InventoryPage.itemTitleHref.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        await InventoryPage.backToProducts.waitForDisplayed();
        await InventoryPage.backToProducts.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('Purchase path go to step one checkout but show name error', async () => {
        await InventoryPage.itemHref.waitForDisplayed();
        await InventoryPage.itemHref.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        await InventoryPage.checkoutButton.waitForDisplayed();
        await InventoryPage.checkoutButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await InventoryPage.continueStepOneButton.waitForDisplayed();
        await InventoryPage.continueStepOneButton.click();
        await InventoryPage.errorMsg.waitForDisplayed();
        await expect(InventoryPage.errorMsg).toHaveText("Error: First Name is required");
    });
    it('last name error', async () => {
        
        await InventoryPage.continueStepOneButton.click();
        await InventoryPage.errorMsg.waitForDisplayed();
        await expect(InventoryPage.errorMsg).toHaveText("Error: First Name is required");
    });
});