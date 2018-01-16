import { KholleboostPage } from './app.po';

describe('kholleboost App', () => {
  let page: KholleboostPage;

  beforeEach(() => {
    page = new KholleboostPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
