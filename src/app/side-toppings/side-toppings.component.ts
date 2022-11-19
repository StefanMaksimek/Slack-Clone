import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
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

  channelsActive = false;
  directmessagesActive = false;
  appsActive = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

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
    this.dialog.open(AddChannelComponent, {
      
    });
  }
}
