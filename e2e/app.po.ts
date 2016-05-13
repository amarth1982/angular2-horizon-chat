export class ChatAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('chat-app-app h1')).getText();
  }
}
