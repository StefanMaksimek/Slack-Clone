import { Component, OnInit } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Message } from 'src/assets/models/message.class';
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

  channelName: string = 'messages';
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
    this.setChannel(this.channelName);
  }

  setChannel(channel: string) {
    this.fire.getCollData(channel).subscribe((CollData: any) => {
      this.channel = CollData;
    });
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

  //

  openThread(messageID: any) {
    this.fire.getThread(messageID);
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
