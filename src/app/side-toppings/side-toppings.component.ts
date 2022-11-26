import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { App } from 'src/assets/models/app.class';
import { Channel } from 'src/assets/models/channel.class';
import { Message } from 'src/assets/models/message.class';
import { AddAppComponent } from '../add-app/add-app.component';
import { AddChannelComponent } from '../add-channel/add-channel.component';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-side-toppings',
  templateUrl: './side-toppings.component.html',
  styleUrls: ['./side-toppings.component.scss'],
})
export class SideToppingsComponent implements OnInit {
  topics = ['Channels', 'Direktnachrichten', 'Apps'];
  directMessages = ['Stefan', 'Robert', 'Baris'];
  apps = ['Slack-Clone Team'];

  // Stefan ########################
  @Output() newSideTopingEvent = new EventEmitter<any>();
  channelArray: any = [];
  // ########################

  channel = new Channel();
  allChannels = [];

  app = new App();
  allApps = [];

  channelsActive = false;
  directmessagesActive = false;
  appsActive = false;

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore,
    public fire: FireService
  ) {}

  ngOnInit(): void {
    this.firestore
      .collection('channels')
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        console.log('received changes', changes);
        this.allChannels = changes;
      });
    this.firestore
      .collection('apps')
      .valueChanges({ idField: 'id' })
      .subscribe((appchanges: any) => {
        console.log('received changes', appchanges);
        this.allApps = appchanges;
      });
  }

  showChannels() {
    this.channelsActive = !this.channelsActive;
  }

  showDirectMessages() {
    this.directmessagesActive = !this.directmessagesActive;
  }

  showApps() {
    this.appsActive = !this.appsActive;
  }

  openChannelDialog() {
    this.dialog.open(AddChannelComponent);
  }

  openAppDialog() {
    this.dialog.open(AddAppComponent);
  }

  //Stefan
  loadChannel(channel: string) {
    if (channel == 'Messages') {
      channel = 'messages';
    }

    console.log('chanelArrey', this.channelArray);
    this.setChannel(channel);
    this.fire.actChannel = channel;
    console.log('fire.actChannel', this.fire.actChannel);

    setTimeout(() => {
      this.newSideTopingEvent.emit(this.channelArray);
    }, 500);
  }

  setChannel(channel: string) {
    this.fire.getCollData(channel).subscribe((CollData: any) => {
      this.channelArray = CollData.sort((a: Message, b: Message) => {
        return a.timeStamp - b.timeStamp;
      });
    });
  }
}
