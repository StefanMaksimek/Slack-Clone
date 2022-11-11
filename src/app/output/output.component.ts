import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  user = [
    {
      userProfilePic: '',
      userName: '',
      userMessage: [
        { text: 'jklfdbnjkndfjkvbnfdj', timeStap: 6545545566 },
        { text: 'dfvbdf', timeStap: 65455454566 },
        { text: '', timeStap: 6545547566 },
        { text: '', timeStap: 6545544566 },
      ],
    },
    {
      userProfilePic: '',
      userName: '',
      userMessage: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
