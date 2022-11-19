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
    this.getUser();
    this.getThread();
  }

  getThread() {
    docData(doc(this.threadRef, this.path)).subscribe((thread: any) => {
      console.log(thread);

      this.thread = thread.thread;
    });
  }

  getUser() {
    if (this.user !== null) {
      // The user object has basic properties such as display name, email, etc.
      this.displayName = this.user.displayName;
      this.email = this.user.email;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      this.uid = this.user.uid;
    }
  }
}
