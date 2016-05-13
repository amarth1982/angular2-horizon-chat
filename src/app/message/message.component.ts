import { Component, OnInit, Input } from '@angular/core';

import {IMessage} from '../shared/index'

@Component({
  moduleId: module.id,
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() data: IMessage
  @Input() currentUser: string

  constructor() {}

  ngOnInit() {
  }

}
