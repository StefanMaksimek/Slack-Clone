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

  constructor(private fire: Firestore) {}

  getCollData(collPath: string) {
    return collectionData(this.setRef(collPath));
  }

  /**
   *
   * @param collPath A slash-separated path to a collection.
   * @param docPath A slash-separated path to a document.
   * @returns
   */
  getDocData(collPath: string, docPath: string) {
    return docData(doc(this.setRef(collPath), docPath));
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
