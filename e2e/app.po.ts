import { browser, element, by } from 'protractor';

export class Angular2Sample2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('components-root h1')).getText();
  }
}
