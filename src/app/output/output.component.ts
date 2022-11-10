import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  user = {
    "userProfilePic": "",
    "userName": "",
    "userMessage": ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
