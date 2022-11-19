import { ThreadMessage } from '../models/threadMessage.class';

export class Thread {
  threadMessages: any = [
    new ThreadMessage(),
    new ThreadMessage().toJson(),
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
    new ThreadMessage().toJson(),
    new ThreadMessage().toJson(),
  ];

  constructor(obj?: any) {}

  toJson() {
    return {
      threadMessages: this.threadMessages,
    };
  }
}
