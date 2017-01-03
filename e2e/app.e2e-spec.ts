import { NgsPage } from './app.po';

describe('ngs App', function() {
  let page: NgsPage;

  beforeEach(() => {
    page = new NgsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
