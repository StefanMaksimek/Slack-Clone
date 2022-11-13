import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-toppings',
  templateUrl: './side-toppings.component.html',
  styleUrls: ['./side-toppings.component.scss']
})
export class SideToppingsComponent implements OnInit {

  topics = ['Favoriten', 'Channel', 'Direktnachrichten', 'Apps']
  topicComponents = ['channel',]

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  openTopic(i: any) {
   this._router.navigateByUrl('/channel')
  }

}
