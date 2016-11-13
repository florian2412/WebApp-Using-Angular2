import { Angular2Sample2Page } from './app.po';

describe('angular2-sample-2 App', function() {
  let page: Angular2Sample2Page;

  beforeEach(() => {
    page = new Angular2Sample2Page();
  });

  it('should display message saying components works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('components works!');
  });
});
