import { Component } from '@angular/core';
import { StarsComponent } from "../stars/stars.component";

@Component({
  selector: 'app-about',
  imports: [StarsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
