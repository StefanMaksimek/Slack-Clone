export class Thread {
  messages: any = [
    {
      timeStamp: 654544644,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.',
    },
    {
      timeStamp: 654544644,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.',
    },
    {
      timeStamp: 654544644,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.',
    },
    {
      timeStamp: 654544644,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.',
    },
    {
      timeStamp: 654544644,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.',
    },
  ];

  constructor(obj?: any) {}

  toJson() {
    return {
      messages: this.messages,
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
