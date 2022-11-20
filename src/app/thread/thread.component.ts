import { Component, OnInit } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection, doc } from 'firebase/firestore';
import { Thread } from 'src/assets/models/thread.class';
import { AuthService } from '../auth/auth.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
export class ThreadComponent implements OnInit {
  getAuth = getAuth();
  user = this.getAuth.currentUser;

  displayName: any;
  email: any;
  uid: any;

  threadRef: any;
  thread: any = new Thread();
  path: string = 'KlrT25uPqcdzk69nzk8G';

  constructor(
    private firestore: Firestore,
    public auth: AuthService,
    private router: Router
  ) {
    this.threadRef = collection(this.firestore, 'threads');
  }

  ngOnInit(): void {
    //this.getThread();
  }

  getThread() {
    docData(doc(this.threadRef, this.path)).subscribe((thread: any) => {
      console.log(thread);

      this.thread = thread.thread;
    });
  }

  /**
   *
   * @param timeStamp in milliseconds
   * @returns 24Hours-Time in Hours:Minuts + 'Uhr'
   */
  convertTimeStamp(timeStamp: any) {
    let date = new Date(timeStamp),
      min = ('0' + (date.getMinutes() + 1)).slice(-2),
      hr = ('0' + (date.getHours() + 1)).slice(-2);

    return [hr, min].join(':') + ' Uhr';
  }
}
