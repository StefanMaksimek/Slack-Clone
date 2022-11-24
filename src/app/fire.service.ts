import { Injectable } from '@angular/core';
import { collectionData, docData } from '@angular/fire/firestore';
import { collection, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  document: any;

  threadRef: any;
  messRef: any;

  constructor(private fire: Firestore) {
    this.threadRef = collection(this.fire, 'threads');
    this.messRef = collection(this.fire, 'messages');
  }

  getThread(messageID: string) {
    docData(doc(this.threadRef, messageID)).subscribe((thread: any) => {
      console.log('getThread', thread);
      //this.thread = thread;
    });
  }

  getMessage(messageID: string) {
    docData(doc(this.messRef, messageID)).subscribe((message: any) => {
      console.log('getM message', message);
      //this.message = message;
    });
  }

  getCollData(collPath: string) {
    return collectionData(this.setRef(collPath));
  }

  /**
   *
   * @param collPath A slash-separated path to a collection.
   * @param docPath A slash-separated path to a document.
   */
  getDocData(collPath: string, docPath: string) {
    docData(doc(this.setRef(collPath), docPath)).subscribe((doc: any) => {
      console.log('getM message', doc);
      this.document = doc;
    });
  }

  /**
   *
   * @param ref A slash-separated path to a collection.
   * @returns The CollectionReference instance.
   */
  setRef(ref: string) {
    return collection(this.fire, ref);
  }
}
