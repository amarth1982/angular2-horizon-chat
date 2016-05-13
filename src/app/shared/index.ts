import {provide} from '@angular/core'

import {Observable} from 'rxjs/observable'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {Subject} from 'rxjs/subject'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/scan'

export function currentUser(){
  return (+ new Date + Math.floor(Math.random() * 999999)).toString(36)
}

export interface IChat {
  messages: Array<IMessage>
}

export interface IMessage{
  message: string
  user: string
}

export class AppendMessage{
  constructor(public message: IMessage){

  }
}

export class LoggedIn{
  constructor(public user: string){

  }
}

export class LoggedOff{
  constructor(){}
}

export type Actions = LoggedIn | LoggedOff | AppendMessage

function messages(state: IMessage[], actions: Observable<Actions>){
  return actions.scan((s,a)=>{

    if(a instanceof AppendMessage){
      return [...s, a.message]
    }

    return s
  }, state)
}

function Chat(initState: IChat,
  actions: Observable<Actions>): Observable<IChat>{
  const chat$ =
    messages(initState.messages, actions)
    .map(s => ({
      messages: s
    }))

  const behaviorChat$ = new BehaviorSubject(initState)
  chat$.subscribe(s => behaviorChat$.next(s))

  return behaviorChat$
}

export const ACTION_DISPATCHER = "dispatcher"
export const APP_STATE = "app state"
export const APP_INIT_STATE = "app init state"
export const CURRENT_USER = "current user"

export let  APP_PROVIDERS = [
  provide(ACTION_DISPATCHER, {
    useValue: new Subject<Actions>()
  }),
  provide(APP_STATE, {
    useFactory: Chat,
    deps: [APP_INIT_STATE, ACTION_DISPATCHER]
  }),
  provide(CURRENT_USER, {
    useFactory: currentUser
  })
]
