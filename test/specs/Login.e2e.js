import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/home-page';

describe('My Login application', () => {
    beforeAll('Navigate to URL', () => {
        browser.url("https://www.saucedemo.com/");
    })

    it('should not login with empty credentials', async () => {
        await LoginPage.login('', '');
        await LoginPage.errorMsg.waitForDisplayed({timout: 10000});
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required");
    });

    it('should not login with invalid credentials', async () => {
        await LoginPage.login('test', 'test');
        await LoginPage.errorMsg.waitForDisplayed({timout: 10000});
        await expect(LoginPage.errorMsg).
        toHaveText("Epic sadface: Username and password do not match any user in this service");
        await browser.refresh();
    });

    it('should not login with empty username', async () => {
        await LoginPage.login('', 'test');
        await LoginPage.errorMsg.waitForDisplayed({timout: 10000});
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required");
        await browser.refresh();
    });

    it('should not login with empty password', async () => {
        await LoginPage.login('test', '');
        await LoginPage.errorMsg.waitForDisplayed({timout: 10000});
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Password is required");
        await browser.refresh();
    });

    it('should login with valid credentials(standard user)', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await InventoryPage.btnBurger.waitForDisplayed({timout: 10000});
        await InventoryPage.btnBurger.click();
        await InventoryPage.btnLogout.waitForDisplayed({timout: 10000});
        await InventoryPage.btnLogout.click();
        await browser.refresh();
    });

    it('should not login with valid credentials but locked user', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await LoginPage.errorMsg.waitForDisplayed({timout: 10000});
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Sorry, this user has been locked out.");
        await browser.refresh();
    });

    it('should login with valid credentials(problem_user)', async () => {
        await LoginPage.login('problem_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await InventoryPage.inventoryImg.waitForDisplayed({timout: 10000});
        await expect(InventoryPage.inventoryImg).toHaveAttr('src', '/static/media/sl-404.168b1cce.jpg');
        await InventoryPage.btnBurger.waitForDisplayed({timout: 10000});
        await InventoryPage.btnBurger.click();
        await InventoryPage.btnLogout.waitForDisplayed({timout: 10000});
        await InventoryPage.btnLogout.click();
        await browser.refresh();
    });

    it('should login with valid credentials(performance_glitch_user)', async () => {
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await InventoryPage.btnBurger.waitForDisplayed({timout: 10000});
        await InventoryPage.btnBurger.click();
        await InventoryPage.btnLogout.waitForDisplayed({timout: 10000});
        await InventoryPage.btnLogout.click();
    });
    it('should not go back to inventory page when clicking back after logging out', async () => {
        await browser.back();
        await LoginPage.errorMsg.waitForDisplayed({timout: 10000});
        await expect(LoginPage.errorMsg).
        toHaveText("Epic sadface: You can only access '/inventory.html' when you are logged in.");
        await browser.refresh();
    });
});


