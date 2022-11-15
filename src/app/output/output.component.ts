import { Component, OnInit } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { collection, doc } from 'firebase/firestore';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  userNames = ['Max Mustermann', 'Arnold Weber', 'Kevin Wagner'];
  profilePic = [
    'assets/img/profile.png',
    'assets/img/profile.png',
    'assets/img/profile.png',
  ];
  timeStamp = ['32763642', '52843893', '132453623'];
  userMassage = ['Hallo wie gehst ?', 'Lorem Ipsum', 'Lorem Ipsum dolor'];

  path: string = 'hrfjkhgbvf4f65g4fg4';
  messages: any = [
    //Vorschlag zur Änderung
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

  ngOnInit(): void {
    // this.getThread('messages');
  }

  getThread(coll: string) {
    let messageRef = collection(this.firestore, coll);
    docData(doc(messageRef, this.path)).subscribe((message: any) => {
      this.messages = message.messages;
    });
  }
}
