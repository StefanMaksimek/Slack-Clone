export class ThreadMessage {
  timeStamp: any;
  userName: any;
  message: any;

  constructor(obj?: any) {
    this.timeStamp = obj ? obj.timeStamp : '12584678';
    this.userName = obj ? obj.userName : 'Thorsten';
    this.message = obj
      ? obj.message
      : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.';
  }

  toJson() {
    return {
      timeStamp: this.timeStamp,
      userName: this.userName,
      message: this.message,
    };
  }
}
