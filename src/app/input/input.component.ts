import {
  Component,
  ElementRef,
  Input,
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
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

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

  @Input() component: any;

  channel: any = 'Angular';
  user!: User;
  message!: Message;

  // file upload
  fileName: any = '';
  fb: any;
  selectedFile:any;
  downloadURL:any = Observable<string>;
  //

  constructor(
    private renderer: Renderer2,
    private firestore: Firestore,
    private storage: AngularFireStorage,
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
  }

  sendMessage() {
    console.log(this.component);

    if (this.component == 'output') {
      this.sendMessageToMessages();
    }
    if (this.component == 'thread') {
      this.sendMessageToThread();
    }
  }

  sendMessageToThread() {
    this.message = new Message({
      userName: this.user.displayName,
      message: this.input.nativeElement.value,
      timeStamp: new Date().getTime(),
      channel: this.channel,
    });
    this.input.nativeElement.value = '';
    this.updateMessages();
  }

  sendMessageToMessages() {
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

  // upload file to storage
  uploadFile(event:any) {
    const file = event.target.files[0];
    const filePath = `uploadedImages/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.fileName = file.name;
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url:any) => { 
            if (url) {
              this.fb = url;
            }
          });
        })
      )
      .subscribe(url => {
        if (url) {
          this.emptyTask(task)
        }
      });
  }

  emptyTask(task:any) {
    task = '';
  }
}
