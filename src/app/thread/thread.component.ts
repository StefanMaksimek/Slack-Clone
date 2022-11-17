import { Component, OnInit } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection, doc } from 'firebase/firestore';
import { Thread } from 'src/assets/models/thread.class';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
export class ThreadComponent implements OnInit {
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
    this.getThread();
  }

  getThread() {
    docData(doc(this.threadRef, this.path)).subscribe((thread: any) => {
      console.log(thread);

      this.thread = thread.thread;
    });
  }

  signOut() {
    this.auth.signOut().subscribe({
      next: () => this.router.navigate(['signin']),
    });
  }
}
