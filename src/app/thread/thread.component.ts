import { Component, OnInit } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { collection, doc } from 'firebase/firestore';
import { Thread } from 'src/assets/models/thread.class';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
export class ThreadComponent implements OnInit {
  threads: any;
  thread: any = new Thread();
  path: string = 'KlrT25uPqcdzk69nzk8G';

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    this.getUser();
  }

  getThreads() {
    collectionData(collection(this.firestore, 'threads')).subscribe(
      (threads) => {
        this.threads = threads;
        console.log('threads', this.threads);
      }
    );
  }

  getUser() {
    const userRef = collection(this.firestore, 'threads');
    docData(doc(userRef, this.path)).subscribe((thread: any) => {
      console.log(thread);

      this.thread = thread;
    });
  }
}
