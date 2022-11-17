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
      userName: 'Max Mustermann',
      profilePic: 'profile.png',
      timeStamp: 32763642,
      message: 'Hallo wie gehst ?',
    },
    {
      userName: 'Eric Mustermann',
      profilePic: 'suit_men.png',
      timeStamp: 327636642,
      message: 'Hallo wie gehst ?',
    },
    {
      userName: 'Torsten Mustermann',
      profilePic: 'suit_women.png',
      timeStamp: 32963642,
      message: 'Hallo wie gehst ?',
    },
    {
      userName: 'Kantholztoni',
      profilePic: 'profile.png',
      timeStamp: 32767842,
      message: 'Hallo wie gehst ?',
    },
    {
      userName: 'Tortentoni',
      profilePic: 'profile.png',
      timeStamp: 32763642,
      message: 'Hallo wie gehst ?',
    },
    {
      userName: 'GürtelGustav',
      profilePic: 'suit_women.png',
      timeStamp: 32768942,
      message:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi. Quasi, ab?',
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
    //this.getThread('messages');
  }

  getThread(coll: string) {
    let messageRef = collection(this.firestore, coll);
    docData(doc(messageRef, this.path)).subscribe((message: any) => {
      this.messages = message.messages;
    });
  }
}
