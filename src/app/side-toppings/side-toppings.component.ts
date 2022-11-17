import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-toppings',
  templateUrl: './side-toppings.component.html',
  styleUrls: ['./side-toppings.component.scss']
})
export class SideToppingsComponent implements OnInit {

  topics = ['Channels', 'Direktnachrichten', 'Apps']
  channels = ['# Angular ','# JavaScript ','# Bewerbung ']
  directMessages = ['Stefan', 'Robert', 'Baris']
  apps = ['Slack-Clone Team']

  channelsActive = false;
  directmessagesActive = false;
  appsActive = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  showChannels() {
    this.channelsActive = true;
  }

  closeChannels() {
    if (this.channelsActive) {
      this.channelsActive = false;
    }
  }

  showDirectMessages() {
    this.directmessagesActive = true;
  }

  showApps() {
    this.appsActive = true;
  }

}
