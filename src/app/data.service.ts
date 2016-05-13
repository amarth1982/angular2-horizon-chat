import { Injectable, Inject } from '@angular/core';
import {Subject} from 'rxjs/subject'
import {ACTION_DISPATCHER, Actions, IMessage, AppendMessage} from './shared/index'
import '@horizon/client/dist/horizon'

//console.log(hz)
const horizon = Horizon()

@Injectable()
export class DataService {
  // chat = horizon("messages")
  chat: any
  constructor(@Inject(ACTION_DISPATCHER) private dispatcher: Subject<Actions>) {
    this.chat.order('datetime')
      .fetch()
      .subscribe(
      (msgs) => {
          console.log(msgs)
      }
    )
  }

  public sendMessage(message: IMessage){
    this.chat.store(message).subscribe(msg=>{
      this.dispatcher.next(new AppendMessage(msg))
    })
  }

}
