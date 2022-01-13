import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { constants } from './contants';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  theme = new BehaviorSubject(constants.DEFAULT_THEME);

  constructor() {
    const savedTheme = localStorage.getItem(constants.LOCALSTORAGE_THEME_KEY);
    savedTheme
      ? this.theme.next(savedTheme)
      : window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
        this.theme.next('dark_mode');

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        const theme = e.matches ? 'dark_mode' : 'light_mode';
        this.theme.next(theme);
        localStorage.setItem(constants.LOCALSTORAGE_THEME_KEY, theme);
      });
  }
}
