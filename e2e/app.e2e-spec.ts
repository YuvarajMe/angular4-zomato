import { Angular4ZomatoPage } from './app.po';

describe('angular4-zomato App', () => {
  let page: Angular4ZomatoPage;

  beforeEach(() => {
    page = new Angular4ZomatoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
