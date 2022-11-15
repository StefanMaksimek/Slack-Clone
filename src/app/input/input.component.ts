import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
import { User } from 'src/assets/models/user.class';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @ViewChild('holder') holder!: ElementRef;
  @ViewChild('form') form!: any;
  @ViewChild('input') input!: any;

  formatting: boolean = true;
  focusing: boolean = false;

  channel: any = 'testChannel';
  user: any = new User();

  constructor(private renderer: Renderer2, private firestore: Firestore) {
    this.renderer.listen('window', 'click', (e: any) => {
      if (
        e.target !== this.holder &&
        e.target !== this.input &&
        e.target !== this.form
      ) {
        this.focusing = false;
      }
    });
  }

  ngOnInit(): void {}

  sendMessage() {
    let x = this.input.nativeElement.value;
    console.log(x);
    this.input.nativeElement.value = '';
  }

  toggleFormatting() {
    this.formatting = !this.formatting;
  }

  focusOn() {
    this.focusing = true;
  }

  //toDo
  updateUser() {
    const gameRef = collection(this.firestore, 'users');
    setDoc(doc(gameRef, this.user.userID), this.user.toJson());
  }
}
