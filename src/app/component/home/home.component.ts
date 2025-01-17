import { Component } from '@angular/core';
import { StarsComponent } from "../stars/stars.component";

@Component({
  selector: 'app-home',
  imports: [StarsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
