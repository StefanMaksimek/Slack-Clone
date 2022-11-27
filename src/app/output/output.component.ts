import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Message } from 'src/assets/models/message.class';
import { Thread } from 'src/assets/models/thread.class';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @ViewChild('content') private content: ElementRef;

  index = '';
  hoverReact = false;

  component: string = 'output';
  message: Message;
  curentThread: any = new Thread();

  channel: any = [];

  constructor(private firestore: Firestore, public fire: FireService) {}

  ngOnInit(): void {}

  scrollToBottom(): void {
    try {
      this.content.nativeElement.scrollTop =
        this.content.nativeElement.scrollHeight;
    } catch (err) {
      console.log('output', err);
    }
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

  openThread(messageID: any) {
    this.fire.actMessID = messageID;

    this.fire
      .getDocData(this.fire.actChannel + 'Threads', messageID)
      .subscribe((doc: any) => {
        this.curentThread = doc;
      });
  }

  updateChannel(channel: string) {
    this.channel = channel;
    setTimeout(() => {
      this.scrollToBottom();
    }, 1);
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
