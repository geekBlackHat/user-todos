import { UsertodosPage } from './app.po';

describe('usertodos App', () => {
  let page: UsertodosPage;

  beforeEach(() => {
    page = new UsertodosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
