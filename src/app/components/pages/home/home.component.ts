import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatListModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
