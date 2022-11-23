import { User } from './user.class';

export class Message {
  userName: any = 'User' + this.createID(5);
  profilePic: any = 'profile.png';
  ID: any = 'empty';
  message: any = 'message';
  timeStamp: any = '9999999999999';
  channel: any = 'Test';

  constructor(obj?: any) {}

  toJson() {
    return {
      ID: this.ID,
      userName: this.userName,
      profilePic: this.profilePic,
      message: this.message,
      timeStamp: this.timeStamp,
      channel: this.channel,
    };
  }

  createID(length: number) {
    let result = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength)); // adding one random character of characters to result
    }
    return result;
  }
}
