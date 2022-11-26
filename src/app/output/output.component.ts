import { Component, OnInit } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { collection, doc } from 'firebase/firestore';
import { Observable, timestamp } from 'rxjs';
import { Message } from 'src/assets/models/message.class';
import { Thread } from 'src/assets/models/thread.class';
import { FireService } from '../fire.service';
import { ThreadComponent } from '../thread/thread.component';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  index = '';
  hoverReact = false;

  component: string = 'output';
  message: Message;
  curentThread: any = new Thread();

  actSideTopping: string;
  channelName: string;
  channel: any = [
    {
      userName: 'torsten',
      message: 'bhnvjagbs h hguvgh vguhgh vuisuvhaus ',
      timeStamp: new Date().getTime(),
      channel: 'Angular',
      profilePic: 'profile.png',
    },
  ];

  constructor(private firestore: Firestore, public fire: FireService) {}

  ngOnInit(): void {
    //this.setChannel(this.channelName);
    //this.setChannel(this.actSideTopping);
  }

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
    }, 1800);
  }

  // Stefan ################################
  setChannel(channel: string) {
    this.fire.getCollData(channel).subscribe((CollData: any) => {
      this.channel = CollData.sort((a: Message, b: Message) => {
        return a.timeStamp - b.timeStamp;
      });
    });
  }

  openThread(messageID: any) {
    this.fire.actMessID = messageID;
    this.fire.getDocData('threads', messageID).subscribe((doc: any) => {
      this.curentThread = doc;
    });
  }

  updateChannel(channel: string) {
    this.channel = channel;
    console.log('updateChannel OutputCom = ', channel);
    console.log('this.actSideTopping OutputCom = ', this.actSideTopping);
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
