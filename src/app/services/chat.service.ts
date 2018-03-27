import { Injectable } from '@angular/core';
import {  FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class ChatService {
  
  user: any;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { 
    this.afAuth.authState.subscribe(auth =>{
      if (auth !== undefined && auth !== null) {
          this.user = firebase.auth;
      }
    })
  }
  
  sendMessage(msg: string){
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message:msg,
      timeSent: timestamp,
      userName: this.userName,
      email: email
    });

    console.log('Called sendMessage()');
  }


  
  getMessages(): FirebaseListObservable<ChatMessage[]> {
    // query to create our message feed binding
    return this.db.list('messages')
    
    
    
    };

  getTimeStamp(){
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                  (now.getUTCMonth()+1) + '/' +
                  now.getUTCMonth();
    const time = now.getUTCHours() + ':' +
                  now.getUTCMinutes() + ':' +
                  now.getUTCSeconds();

    return (date+ ' ' +time);
  }

}
