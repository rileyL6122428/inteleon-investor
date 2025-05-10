import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

export const THEME_NAME_TO_DISPLAY_NAME = {
  'inteleon': 'Inteleon Investor',
  'baller': 'Ball Street'
}

export type ThemeName = keyof typeof THEME_NAME_TO_DISPLAY_NAME;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme$ = new ReplaySubject<ThemeName>(1);

  constructor() {
    this.theme$.next('baller');
  }

  set newTheme(themeName: ThemeName) {
    this.theme$.next(themeName);
  }

  get changes$(): Observable<ThemeName> {
    return this.theme$;
  }
}
