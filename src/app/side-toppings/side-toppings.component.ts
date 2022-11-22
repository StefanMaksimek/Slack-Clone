import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Channel } from 'src/assets/models/channel.class';
import { AddChannelComponent } from '../add-channel/add-channel.component';

@Component({
  selector: 'app-side-toppings',
  templateUrl: './side-toppings.component.html',
  styleUrls: ['./side-toppings.component.scss'],
})
export class SideToppingsComponent implements OnInit {
  topics = ['Channels', 'Direktnachrichten', 'Apps'];
  channels = ['# Angular ', '# JavaScript ', '# Bewerbung '];
  directMessages = ['Stefan', 'Robert', 'Baris'];
  apps = ['Slack-Clone Team'];

  channel = new Channel();
  allChannels = [];

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

  openDialog() {
    this.dialog.open(AddChannelComponent);
  }
}
