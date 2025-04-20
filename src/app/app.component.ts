import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InteleonIconComponent } from './components/inteleon-icon/inteleon-icon.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InteleonIconComponent, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inteleon-investor-frontend';
}
