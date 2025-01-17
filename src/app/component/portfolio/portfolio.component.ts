import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { StarsComponent } from "../stars/stars.component";

@Component({
  selector: 'app-portfolio',
  imports: [StarsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  @ViewChild('test') modal!:ElementRef;
  @ViewChild('hamada') hamada1!:ElementRef;
  openModal(data:string){

this.hamada1.nativeElement.src=data;
this.modal.nativeElement.style.display = 'block';
    this.modal.nativeElement.classList.add('show');
  }
  closeModal() {
    // Remove the 'show' class to hide the modal
    this.modal.nativeElement.style.display = 'none';
    this.modal.nativeElement.classList.remove('show');
  }

}
