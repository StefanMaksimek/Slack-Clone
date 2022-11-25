import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Thread } from 'src/assets/models/thread.class';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class ThreadComponent implements OnInit {
  @Input() thread: any = new Thread();
  component: string = 'thread';

  constructor() {}

  ngOnInit(): void {}

  /**
   *
   * @param timeStamp in milliseconds
   * @returns 24Hours-Time in Hours:Minuts + 'Uhr' => 20:15 Uhr
   */
  convertTimeStamp(timeStamp: number) {
    let date = new Date(timeStamp),
      min = ('0' + (date.getMinutes() + 1)).slice(-2),
      hr = ('0' + (date.getHours() + 1)).slice(-2);

    return [hr, min].join(':') + ' Uhr';
  }
}
