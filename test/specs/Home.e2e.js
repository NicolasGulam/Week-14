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
    it('Should change filter button Name (Z to A)', async () => {
        await InventoryPage.btnFilters.waitForDisplayed();
        await InventoryPage.btnFilters.click();
        await InventoryPage.OptionFilerNameZA.waitForDisplayed();
        await InventoryPage.OptionFilerNameZA.click();
        await expect(InventoryPage.filtersText).toHaveText('NAME (Z TO A)');
    });
    it('Should change filter button Price (low to high)', async () => {
        await InventoryPage.btnFilters.waitForDisplayed();
        await InventoryPage.btnFilters.click();
        await InventoryPage.OptionFilerNameLowHigh.waitForDisplayed();
        await InventoryPage.OptionFilerNameLowHigh.click();
        await expect(InventoryPage.filtersText).toHaveText('PRICE (LOW TO HIGH)');
    });
    it('Should change filter button Price (high to low)', async () => {
        await InventoryPage.btnFilters.waitForDisplayed();
        await InventoryPage.btnFilters.click();
        await InventoryPage.OptionFilerNameHighLow.waitForDisplayed();
        await InventoryPage.OptionFilerNameHighLow.click();
        await expect(InventoryPage.filtersText).toHaveText('PRICE (HIGH TO LOW)');
    });
    it('Should change filter button Name (A to Z)', async () => {
        await InventoryPage.btnFilters.waitForDisplayed();
        await InventoryPage.btnFilters.click();
        await InventoryPage.OptionFilerNameAZ.waitForDisplayed();
        await InventoryPage.OptionFilerNameAZ.click();
        await expect(InventoryPage.filtersText).toHaveText('NAME (A TO Z)');
    });
    it('Purchase path go to step one checkout but show name error', async () => {
        await InventoryPage.addToCartButton.waitForDisplayed();
        await InventoryPage.addToCartButton.click();
        await InventoryPage.cartButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await InventoryPage.checkoutButton.waitForDisplayed();
        await InventoryPage.checkoutButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await InventoryPage.continueStepOneButton.waitForDisplayed();
        await InventoryPage.continueStepOneButton.click();
        await InventoryPage.errorMsg.waitForDisplayed();
        await expect(InventoryPage.errorMsg).toHaveText("Error: First Name is required");
    });
    it('should show last name error', async () => {
        await InventoryPage.inputName.setValue('test');
        await InventoryPage.continueStepOneButton.click();
        await InventoryPage.errorMsg.waitForDisplayed();
        await expect(InventoryPage.errorMsg).toHaveText("Error: Last Name is required");
    });
    it('should show postal code error', async () => {
        await InventoryPage.inputLastName.setValue('test');
        await InventoryPage.continueStepOneButton.click();
        await InventoryPage.errorMsg.waitForDisplayed();
        await expect(InventoryPage.errorMsg).toHaveText("Error: Postal Code is required");
    });
    it('should be able to go to step two successfully and buy', async () => {
        await InventoryPage.inputPostal.setValue('2000');
        await InventoryPage.continueStepOneButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        await InventoryPage.finishPurchaseButton.waitForDisplayed();
        await InventoryPage.finishPurchaseButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await InventoryPage.thankYouMessage.waitForDisplayed();
        await expect(InventoryPage.thankYouMessage).toHaveText("THANK YOU FOR YOUR ORDER");
        await InventoryPage.backToProducts.click();
    });
    it('should have href of twitter page', async () => {
        await expect(InventoryPage.twitterBtn).toHaveHref('https://twitter.com/saucelabs');
    });
    it('should have href of facebook page', async () => {
        await expect(InventoryPage.facebookBtn).toHaveHref('https://www.facebook.com/saucelabs');
    });
    it('should have href of linkedin page', async () => {
        await expect(InventoryPage.linkedinBtn).toHaveHref('https://www.linkedin.com/company/sauce-labs/');
    });
    it('should go to about page', async () => {
        await InventoryPage.btnBurger.waitForDisplayed();
        await InventoryPage.btnBurger.click();
        await InventoryPage.btnAbout.waitForDisplayed();
        await browser.pause(1000);
        await InventoryPage.btnAbout.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/');
    });
});