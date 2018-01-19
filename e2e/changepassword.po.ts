import { browser, by, element } from 'protractor';
import { LoginPage } from './login.po';

export class ProfilePage {

  private login : LoginPage

  navigateTo() {
    return browser.get('/user/profile');
  }

  async logIn(email: string, password: string){
    this.login = new LoginPage();
    return await this.login.logIn(email,password);
  }

  getNavbarUserName() {
    return element(by.css('.navbar-right > li:first-child')).getText();
  }

  async changePassword(newPassword: string) {
    element(by.xpath('//*[@id="navbar"]/ul[2]/li[1]/div/a')).click();
    element(by.xpath('/html/body/app-root/div/app-profile/form/div[1]/input')).sendKeys(newPassword);
    element(by.xpath('/html/body/app-root/div/app-profile/form/div[2]/input')).sendKeys(newPassword);
    return await element(by.buttonText('Change Password')).click();
  }
}
//*[@id="navbar"]/ul[2]/li[1]/div/a