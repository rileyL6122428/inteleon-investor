import { NgClass } from '@angular/common';
import { Component, model, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { InteleonIconComponent } from './components/inteleon-icon/inteleon-icon.component';
import { ThemeName, ThemeService } from './services/theme.service';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'inteleon-investor-frontend';
  onHomePage = signal(true);

  theme = signal<ThemeName>('baller');

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((routeEvent) => {
      if (routeEvent instanceof NavigationStart) {
        this.onHomePage.set(routeEvent.url === '/');
      }
    });

    this.themeService.changes$.subscribe((nextTheme) => {
      this.theme.set(nextTheme);
    });
  }
}
