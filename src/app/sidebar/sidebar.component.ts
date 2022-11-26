import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnChanges {
  @Output() newSideTopingEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(SideToppingFromChild: SimpleChanges): void {}

  updateChannel(channel: string) {
    console.log('updateChannel SidebarCom = ', channel);
    this.newSideTopingEvent.emit(channel);
  }
}
