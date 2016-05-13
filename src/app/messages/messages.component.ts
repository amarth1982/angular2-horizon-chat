import { Component, OnInit, Input } from '@angular/core';

import {CORE_DIRECTIVES} from '@angular/common'

import {IMessage} from '../shared/index'
import {MessageComponent} from '../message/message.component'

@Component({
  moduleId: module.id,
  selector: 'app-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.css'],
  directives: [...CORE_DIRECTIVES, MessageComponent]
})
export class MessagesComponent implements OnInit {

  @Input() messages: IMessage[]
  @Input() currentUser: string
  
  constructor() {}

  ngOnInit() {
  }

}
