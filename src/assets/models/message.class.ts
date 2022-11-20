import { User } from './user.class';

export class Message {
  userName: any;
  profilePic: any;
  ID: any = 'empty';
  message: any;
  timeStamp: any;
  channel: any;

  constructor(obj?: any) {
    this.ID = this.createID(20);
    this.userName = obj.userName ? obj.userName : 'User' + this.createID(5);
    this.profilePic = obj.profilePic ? obj.profilePic : 'profile.png';
    this.message = obj.message ? obj.message : 'message';
    this.timeStamp = obj.timeStamp ? obj.timeStamp : '1519211811670';
    this.channel = obj.channel ? obj.channel : 'Angular';
  }

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
