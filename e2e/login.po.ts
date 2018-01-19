import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/user/login');
  }

  getNavbarUserName() {
    return element(by.css('.navbar-right > li:first-child')).getText();
  }

  async logIn(email: string, password: string) {
    element(by.xpath('/html/body/app-root/div/app-login/form/div[1]/input')).sendKeys(email);
    element(by.xpath('/html/body/app-root/div/app-login/form/div[2]/input')).sendKeys(password);
    return await element(by.buttonText('Log In')).click();
  }
}
