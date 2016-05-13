import { Component, provide, Inject } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'
import {Observable} from 'rxjs/Observable'

import {Actions, APP_PROVIDERS, APP_INIT_STATE, APP_STATE, IChat, IMessage, CURRENT_USER} from './shared/index'
import {MessagesComponent} from './messages/messages.component'
import {TextComponent} from './text/text.component'

@Component({
  moduleId: module.id,
  selector: 'chat-app-app',
  templateUrl: 'chat-app.component.html',
  styleUrls: ['chat-app.component.css'],
  directives: [...CORE_DIRECTIVES, TextComponent, MessagesComponent],
  providers: [...APP_PROVIDERS,
    provide(APP_INIT_STATE, {useValue: {messages:[]}})]
})
export class ChatAppAppComponent {
  title = 'chat-app!';

  get messages(): Observable<IMessage[]>{
      return this.state.map(s=>s.messages)
  }

  constructor(@Inject(APP_STATE) private state: Observable<IChat>,
    @Inject(CURRENT_USER) public user: string){

  }
}
