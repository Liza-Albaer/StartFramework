import { Component, ElementRef, Input, input, ViewChild, viewChild } from '@angular/core';
import { StarsComponent } from "../stars/stars.component";
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [StarsComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isLabelVisible1 = false;
  isLabelVisible2 = false;
  isLabelVisible3 = false;
  isLabelVisible4 = false;
  show(data: string): void {
    if (data === 'u') {
      this.isLabelVisible1 = true;
    }else  if (data === 'a') {
      this.isLabelVisible2 = true;
    }
    else if (data === 'e') {
      this.isLabelVisible3 = true;
    }
    else  if (data === 'p') {
      this.isLabelVisible4 = true;
    }
  }
  hideLabel(event: Event, data: string): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value.trim();

    if (data === 'u') {
      this.isLabelVisible1 = !!inputValue;
    } else if (data === 'a') {
      this.isLabelVisible2 = !!inputValue;
    } else if (data === 'e') {
      this.isLabelVisible3 = !!inputValue;
    } else if (data === 'p') {
      this.isLabelVisible4 = !!inputValue;
    }
  }
}
