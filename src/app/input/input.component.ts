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
import { finalize, flatMap } from 'rxjs/operators';
import { Thread } from 'src/assets/models/thread.class';
import { FireService } from '../fire.service';
import { ThreadMessage } from 'src/assets/models/threadMessage.class';

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

  textRed = false;

  @Input() component: any;
  @Input() curentThread: Thread = new Thread();

  channel: any = 'Angular';
  user!: User;
  message: Message = new Message();
  newThread: Thread = new Thread();

  // file upload
  fileName: any = '';
  fb: any;
  selectedFile: any;
  downloadURL: any = Observable<string>;
  showPreview: boolean = false;
  //

  constructor(
    private renderer: Renderer2,
    private firestore: Firestore,
    private storage: AngularFireStorage,
    public auth: AuthService,
    public fire: FireService
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
    if (this.component == 'output') {
      this.sendMessageToMessages();
    }
    if (this.component == 'thread') {
      this.sendMessageToThread();
    }
  }

  sendMessageToThread() {
    console.log('ToDo');
    console.log('curentThread', this.curentThread);

    this.curentThread.threadMessages.push(this.updateThread());
    console.log('curentThread after push', this.curentThread);
    this.fire.updateDocData('threads', this.fire.actMessID, this.curentThread);
    this.input.nativeElement.value = '';
  }

  sendMessageToMessages() {
    this.setMessage();
    this.setNewThread();
    this.input.nativeElement.value = '';
    this.updateMessages();
    this.fire.updateDocData(
      'threads',
      this.message.ID,
      this.newThread.toJson()
    );
  }

  setMessage() {
    this.message = new Message();
    this.message.userName = this.user.displayName;
    this.message.ID = this.message.createID(20);
    this.message.message = this.input.nativeElement.value;
    this.message.timeStamp = new Date().getTime();
    this.message.channel = this.channel;
    this.message.pictureUrl = this.fb ? this.fb : '';
  }

  setNewThread() {
    this.newThread = new Thread({
      message: this.message.toJson(),
      threadMessages: [],
    });
  }

  updateThread() {
    return new ThreadMessage({
      timeStamp: new Date().getTime(),
      userName: this.user.displayName,
      profilePic: this.user.profilePic,
      message: this.input.nativeElement.value,
    }).toJson();
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
        profilePic: 'suit_women.png',
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
  uploadFile(event: any) {
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
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
              this.showPreview = true;
              console.log(this.fb);
            }
          });
        })
      )
      .subscribe((url) => {
        if (url) {
          this.emptyTask(task);
        }
      });
  }

  emptyTask(task: any) {
    task = '';
  }

  deleteImgStorage(fb: any) {
    this.storage.storage.refFromURL(fb).delete();
    this.fb = '';
    this.showPreview = false;
  }

  textToFunction() {
    this.textRed = true;
  }
}
