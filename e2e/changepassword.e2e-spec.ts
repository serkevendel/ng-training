import { ProfilePage } from './changepassword.po';

describe('ng-training App', () => {
  let page: ProfilePage;
  let oldPassword: string;
  let newPassword: string; 
  let email: string; 

  beforeEach(() => {
    page = new ProfilePage();
    oldPassword = 'dddddd';
    newPassword = 'testtest';
    email = 'testmail@test.test';
  });

  it('should change password', async() => {
    await page.logIn(email,oldPassword);
    await page.navigateTo();
    await page.changePassword(newPassword);
    await page.logIn(email,newPassword);
    expect(page.getNavbarUserName()).toEqual('vendeltest');
  });

  afterAll(() => {
     page.changePassword(oldPassword);
  })
});
