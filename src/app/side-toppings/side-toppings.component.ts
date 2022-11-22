import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { App } from 'src/assets/models/app.class';
import { Channel } from 'src/assets/models/channel.class';
import { AddAppComponent } from '../add-app/add-app.component';
import { AddChannelComponent } from '../add-channel/add-channel.component';

@Component({
  selector: 'app-side-toppings',
  templateUrl: './side-toppings.component.html',
  styleUrls: ['./side-toppings.component.scss'],
})
export class SideToppingsComponent implements OnInit {
  topics = ['Channels', 'Direktnachrichten', 'Apps'];
  directMessages = ['Stefan', 'Robert', 'Baris'];
  apps = ['Slack-Clone Team'];

  channel = new Channel();
  allChannels = [];

  app = new App();
  allApps = [];

  channelsActive = false;
  directmessagesActive = false;
  appsActive = false;

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
    .collection('channels')
    .valueChanges({idField: 'id'})
    .subscribe((changes: any)=> {
      console.log('received changes', changes);
      this.allChannels = changes;
    })
    this.firestore
    .collection('apps')
    .valueChanges({idField: 'id'})
    .subscribe((appchanges: any)=> {
      console.log('received changes', appchanges);
      this.allApps = appchanges;
    })
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

  
}
