import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
 
  userNames = ['Max Mustermann', 'Arnold Weber', 'Kevin Wagner'];
  profilePic = ['assets/img/profile.png','assets/img/profile.png','assets/img/profile.png'];
  timeStamp = ['32763642','52843893','132453623'];
  userMassage = ['Hallo wie gehst ?','Lorem Ipsum','Lorem Ipsum dolor'];

  constructor() { }

  ngOnInit(): void { }
}
