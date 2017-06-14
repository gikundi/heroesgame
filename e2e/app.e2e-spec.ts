import { HeroesgamePage } from './app.po';

describe('heroesgame App', function() {
  let page: HeroesgamePage;

  beforeEach(() => {
    page = new HeroesgamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
