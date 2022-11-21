import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll('Navigate to URL', () => {
        browser.url("https://www.saucedemo.com/");
    })
    it('should not login with empty credentials', async () => {
        await LoginPage.inputUsername.setValue("");
        await LoginPage.inputPassword.setValue("");
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed({timout: 5000});
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required")
        //await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        //await expect(SecurePage.flashAlert).toBeExisting();
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!');
    });
    it('should not login with invalid credentials', async () => {
        await LoginPage.inputUsername.setValue("test");
        await LoginPage.inputPassword.setValue("test");
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed({timout: 5000});
        await expect(LoginPage.errorMsg).
        toHaveText("Epic sadface: Username and password do not match any user in this service")
        //await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        //await expect(SecurePage.flashAlert).toBeExisting();
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!');
        await browser.refresh();
    });
    it('should not login with empty username', async () => {
        await LoginPage.inputUsername.setValue("");
        await LoginPage.inputPassword.setValue("test");
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed({timout: 5000});
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required")
        //await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        //await expect(SecurePage.flashAlert).toBeExisting();
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!');
        await browser.refresh();
    });
    it('should not login with empty password', async () => {
        await LoginPage.inputUsername.setValue("test");
        await LoginPage.inputPassword.setValue("");
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed({timout: 5000});
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Password is required")
        //await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        //await expect(SecurePage.flashAlert).toBeExisting();
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!');
    });
    it('should login with valid credentials(standard user)', async () => {
        await LoginPage.inputUsername.setValue("standard_user");
        await LoginPage.inputPassword.setValue("secret_sauce");
        await LoginPage.btnLogin.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await LoginPage.btnBurger.click();
        await LoginPage.btnLogout.click();
    });
});


