import { NgClass } from '@angular/common';
import { Component, model, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { InteleonIconComponent } from './components/inteleon-icon/inteleon-icon.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    InteleonIconComponent,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatListModule,
    NgClass,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'inteleon-investor-frontend';
  onHomePage = signal(true);

  theme = model<'inteleon' | 'baller'>('inteleon');

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    // this.router.routerState.
    this.router.events.subscribe((routeEvent) => {
      if (routeEvent instanceof NavigationStart) {
        this.onHomePage.set(routeEvent.url === '/');
      }
    })
  }
}
