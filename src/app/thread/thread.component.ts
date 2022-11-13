import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
export class ThreadComponent implements OnInit {
  threads: any;
  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    this.getThreads();
  }

  getThreads() {
    collectionData(collection(this.firestore, 'threads')).subscribe(
      (threads) => {
        this.threads = threads;
        console.log('threads', this.threads);
      }
    );
  }
}
