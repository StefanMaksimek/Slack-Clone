import { Thread } from './thread.class';

export class Message {
  ID: any;
  message: any;
  timeStamp: any;
  thread: any = new Thread();
  channel: any;
  userID: any;
  userName: any;

  constructor(ID: any, name: any) {
    this.userID = ID;
    this.userName = name;
  }
}
