import { objectVal } from '@angular/fire/database';
import { ThreadMessage } from '../models/threadMessage.class';
import { Message } from './message.class';

export class Thread {
  threadMessages: any[];

  constructor(obj?: any) {
    this.threadMessages = obj
      ? obj.threadMessages
      : [new ThreadMessage().toJson(), new ThreadMessage().toJson()];
  }

  toJson() {
    return {
      threadMessages: this.threadMessages,
    };
  }
}
