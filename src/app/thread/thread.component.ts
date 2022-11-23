import {
  ChangeDetectorRef,
  Component,
  Injectable,
  OnInit,
} from '@angular/core';
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

  message: any = new Message();
  threadRef: any;
  messRef: any;
  thread: Thread = new Thread();
  path: string = '8z2mq8bFFs0fxdjPFy7j';
  component: string = 'thread';

  constructor(
    private firestore: Firestore,
    public auth: AuthService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.threadRef = collection(this.firestore, 'threads');
    this.messRef = collection(this.firestore, 'messages');
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  getThread(messageID: string) {
    docData(doc(this.threadRef, messageID)).subscribe((thread: any) => {
      console.log('getThread', thread);
      this.thread = thread;
    });
  }

  getMessage(messageID: string) {
    docData(doc(this.messRef, messageID)).subscribe((message: any) => {
      console.log('getM message', message);
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
