import { Component, OnInit } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { collection, doc } from 'firebase/firestore';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  index = '';
  hoverReact = false;

  path: string = 'hrfjkhgbvf4f65g4fg4';
  messages: any = [
    {
      userName: 'torsten',
      message: 'bhnvjagbs h hguvgh vguhgh vuisuvhaus ',
      timeStamp: new Date().getTime(),
      channel: 'Angular',
      profilePic: 'profile.png',
    },
    {
      userName: 'torsten',
      message: 'bhnvjagbs h hguvgh vguhgh vuisuvhaus ',
      timeStamp: new Date().getTime(),
      channel: 'Angular',
      profilePic: 'profile.png',
    },
    {
      userName: 'torsten',
      message: 'bhnvjagbs h hguvgh vguhgh vuisuvhaus ',
      timeStamp: new Date().getTime(),
      channel: 'Angular',
      profilePic: 'profile.png',
    },
    {
      userName: 'torsten',
      message: 'bhnvjagbs h hguvgh vguhgh vuisuvhaus ',
      timeStamp: new Date().getTime(),
      channel: 'Angular',
      profilePic: 'profile.png',
    },
  ];

  constructor(private firestore: Firestore) {}

  onMouseover(i: any): void {
    let id: any = 'hover-container' + i;
    let box: any = document.getElementById(id);
    box.style.display = 'flex';
  }

  onMouseout(i: any): void {
    let id: any = 'hover-container' + i;
    let box: any = document.getElementById(id);
    box.style.display = 'none';
  }

  openDialog() {
    let id: any = 'dialog';
    let dialogContainer: any = document.getElementById(id);
    dialogContainer.style.display = 'flex';
    dialogContainer.innerHTML = 'Diese Function wurde noch nicht Implementiert';

    setTimeout(() => {
      dialogContainer.style.display = 'none';
    }, 1200);
  }

  ngOnInit(): void {
    //this.getMessages('messages');
  }

  getMessages(coll: string) {
    let messageRef = collection(this.firestore, coll);
    docData(doc(messageRef, this.path)).subscribe((messages: any) => {
      this.messages = messages;
    });
  }
}
