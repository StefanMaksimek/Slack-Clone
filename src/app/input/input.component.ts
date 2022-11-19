import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { Message } from 'src/assets/models/message.class';
import { User } from 'src/assets/models/user.class';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @ViewChild('holder') holder!: ElementRef;
  @ViewChild('form') form!: any;
  @ViewChild('input') input!: any;

  getAuth = getAuth();
  fireAuthUser = this.getAuth.currentUser;

  formatting: boolean = true;
  focusing: boolean = false;

  channel: any = 'Angular';
  user!: User;
  message!: Message;

  constructor(
    private renderer: Renderer2,
    private firestore: Firestore,
    public auth: AuthService
  ) {
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

  ngOnInit(): void {
    this.getUser();
    console.log('user', this.user);
    this.updateUser();
  }

  sendMessage() {
    this.message = new Message({
      userName: this.user.displayName,
      message: this.input.nativeElement.value,
      timeStamp: new Date().getTime(),
      channel: this.channel,
    });
    this.input.nativeElement.value = '';
    this.updateMessages();
  }

  toggleFormatting() {
    this.formatting = !this.formatting;
  }

  focusOn() {
    this.focusing = true;
  }

  getUser() {
    if (this.fireAuthUser !== null) {
      this.user = new User({
        uid: this.fireAuthUser.uid,
        displayName: this.fireAuthUser.displayName,
        email: this.fireAuthUser.email,
        channels: ['Angular', 'JavaSkript'],
        directMessages: [],
      });
    }
  }

  updateMessages() {
    const mesRef = collection(this.firestore, 'messages');
    setDoc(doc(mesRef, this.message.ID), this.message.toJson());
  }

  //toDo
  updateUser() {
    const gameRef = collection(this.firestore, 'users');
    setDoc(doc(gameRef, this.user.uid), this.user.toJson());
  }
}
