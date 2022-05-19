import { Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Hello Tal';
  signaturePad: SignaturePad;
  @ViewChild('canvas') canvasEl: ElementRef;
  signatureImg: string;

  constructor() { }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    console.log(event);
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    if (this.signaturePad.isEmpty()) {
      alert('Empty');
    }
    else {

      const base64Data = this.signaturePad.toDataURL();
      console.log(base64Data);
      this.signatureImg = base64Data;
    }
  }
  moved(event: Event) {
    // works in device not in browser
  }
}
