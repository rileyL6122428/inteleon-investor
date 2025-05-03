import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { InteleonIconComponent } from './components/inteleon-icon/inteleon-icon.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    InteleonIconComponent,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatListModule,
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'inteleon-investor-frontend';
  onHomePage = signal(true);

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
