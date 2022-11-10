import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: any[] = [
    {
      ID: '4fd56fd4b5df56',
      name: 'Stefan Maksimek',
      img: 'suit_men.png',
    },
  ];
}
