import { Component, Injectable, OnInit } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection, doc } from 'firebase/firestore';
import { Thread } from 'src/assets/models/thread.class';
import { AuthService } from '../auth/auth.service';
import { getAuth } from 'firebase/auth';
import { Message } from 'src/assets/models/message.class';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class ThreadComponent implements OnInit {
  getAuth = getAuth();

  message: Message = new Message();
  threadRef: any;
  messRef: any;
  thread: Thread = new Thread();
  path: string;
  component: string = 'thread';

  constructor(
    private firestore: Firestore,
    public auth: AuthService,
    private router: Router
  ) {
    this.threadRef = collection(this.firestore, 'threads');
    this.messRef = collection(this.firestore, 'message');
  }

  ngOnInit(): void {}

  getThread() {
    console.log('thread.path', this.path);

    docData(doc(this.threadRef, this.path)).subscribe((thread: any) => {
      console.log(thread);
      this.thread = thread;
    });
  }

  getMessage() {
    console.log('thread.message', this.message);

    docData(doc(this.messRef, this.path)).subscribe((message: any) => {
      console.log(message);
      this.message = message;
    });
  }

  /**
   *
   * @param timeStamp in milliseconds
   * @returns 24Hours-Time in Hours:Minuts + 'Uhr' => 20:15 Uhr
   */
  convertTimeStamp(timeStamp: number) {
    let date = new Date(timeStamp),
      min = ('0' + (date.getMinutes() + 1)).slice(-2),
      hr = ('0' + (date.getHours() + 1)).slice(-2);

    return [hr, min].join(':') + ' Uhr';
  }
}
