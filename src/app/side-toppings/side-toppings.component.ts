import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  showChannels() {
    this.channelsActive = !this.channelsActive;
    //this.channelsActive = true;
  }

  showDirectMessages() {
    this.directmessagesActive = !this.directmessagesActive;
  }

  showApps() {
    this.appsActive = !this.appsActive;
  }
}
