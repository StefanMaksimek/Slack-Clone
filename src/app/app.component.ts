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
      timeStamp: 5161515165,
      color: 'red',
      threads: [
        {
          ID: 'hjkf564h65g4h4r',
          messages: [
            {
              timeStamp: 654544644,
              message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.',
            },
            {
              timeStamp: 654544644,
              message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.',
            },
            {
              timeStamp: 654544644,
              message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.',
            },
            {
              timeStamp: 654544644,
              message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.',
            },
            {
              timeStamp: 654544644,
              message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit dignissimos repellendus.',
            },
          ],
        },
      ],
    },
  ];
}
