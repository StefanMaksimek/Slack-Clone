import { objectVal } from '@angular/fire/database';
import { ThreadMessage } from '../models/threadMessage.class';
import { Message } from './message.class';

export class Thread {
  message: Message;

  threadMessages: any = [
    new ThreadMessage().toJson(),
    new ThreadMessage().toJson(),
  ];

  constructor(obj?: any) {
    this.message = obj ? obj.message : new Message();
    this.threadMessages = obj
      ? obj.threadMessages
      : [new ThreadMessage().toJson(), new ThreadMessage().toJson()];
  }

  toJson() {
    return {
      message: this.message.toJson(),
      threadMessages: this.threadMessages,
    };
  }
}
