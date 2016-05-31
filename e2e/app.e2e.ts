import { HootpwaPage } from './app.po';

describe('hootpwa App', function() {
  let page: HootpwaPage;

  beforeEach(() => {
    page = new HootpwaPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hootpwa works!');
  });
});
