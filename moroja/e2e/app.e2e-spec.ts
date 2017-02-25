import { MorojaPage } from './app.po';

describe('moroja App', () => {
  let page: MorojaPage;

  beforeEach(() => {
    page = new MorojaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
