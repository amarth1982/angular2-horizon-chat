import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ChatAppAppComponent } from '../app/chat-app.component';

beforeEachProviders(() => [ChatAppAppComponent]);

describe('App: ChatApp', () => {
  it('should create the app',
      inject([ChatAppAppComponent], (app: ChatAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'chat-app works!\'',
      inject([ChatAppAppComponent], (app: ChatAppAppComponent) => {
    expect(app.title).toEqual('chat-app works!');
  }));
});
