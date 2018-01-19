import { LoginPage } from './login.po';

describe('ng-training App', () => {
  let page: LoginPage;
  let password: 'dddddd'
  let email: 'testmail@test.test'

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should log in works', async() => {
    await page.navigateTo();
    page.logIn(email,password);
    expect(page.getNavbarUserName()).toEqual('vendeltest');
  });
});
