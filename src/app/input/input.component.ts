import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

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
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: any) => {
      console.log('path', e.path);

      if (
        e.target !== this.holder &&
        e.target !== this.input &&
        e.target !== this.form
      ) {
        console.log('click outside');
        this.focusing = false;
      }
    });
  }

  ngOnInit(): void {}

  toggleFormatting() {
    this.formatting = !this.formatting;
  }

  focusOn() {
    this.focusing = true;
    console.log('cklic inside');
  }
}
