export class HootpwaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hootpwa-app h1')).getText();
  }
}
