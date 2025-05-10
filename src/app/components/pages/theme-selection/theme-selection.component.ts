import { Component, inject, model, OnDestroy, OnInit, OutputRef, OutputRefSubscription } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ThemeService, ThemeName } from '../../../services/theme.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-theme-selection',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './theme-selection.component.html',
  styleUrl: './theme-selection.component.scss'
})
export class ThemeSelectionComponent implements OnInit, OnDestroy {

  theme = model<ThemeName>('baller');
  private themeService = inject(ThemeService);
  private themeModelSub: OutputRefSubscription | null = null;

  ngOnInit(): void {
    this.themeService.changes$.pipe(take(1)).subscribe((nextTheme: ThemeName) => {
      this.theme.set(nextTheme);
    });

    this.themeModelSub = this.theme.subscribe((nextTheme) => {
      this.themeService.newTheme = nextTheme;
    });
  }

  ngOnDestroy(): void {
    this.themeModelSub?.unsubscribe();
  }
}
