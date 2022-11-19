export class Message {
  userName: any;
  ID: any = 'empty';
  message: any;
  timeStamp: any;
  channel: any;

  constructor(obj?: any) {
    this.ID = this.createID(20);
    this.userName = obj ? obj.userName : 'userName';
    this.message = obj ? obj.message : 'message';
    this.timeStamp = obj ? obj.timeStamp : 'timeStamp';
    this.channel = obj ? obj.channel : 'channel';
  }

  toJson() {
    return {
      ID: this.ID,
      userName: this.userName,
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
