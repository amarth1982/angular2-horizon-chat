import { Component, OnInit, Inject, provide } from '@angular/core';
import {Subject} from 'rxjs/Subject'

import {CURRENT_USER} from '../shared/index'
import {DataService} from '../data.service'

@Component({
  moduleId: module.id,
  selector: 'app-text',
  templateUrl: 'text.component.html',
  styleUrls: ['text.component.css'],
  providers: [
    provide(DataService,
    {
      useClass: DataService
    })
  ]
})
export class TextComponent implements OnInit {
  public message: string

  constructor(private dataService: DataService,
    @Inject(CURRENT_USER) private user: string) {}

  ngOnInit() {
  }

  OnSend(){
    let trimmedMessage = this.message.trim()
    if(trimmedMessage){
      this.dataService.sendMessage({message: trimmedMessage, user: this.user})
      this.message = ''
    }
  }

  OnKeyPressed(event){
    if(event.keyCode == 13){
      this.OnSend()
    }
  }
}
