import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { constants } from './contants';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  theme = new BehaviorSubject(constants.DEFAULT_THEME);

  constructor(private ref: ApplicationRef) {
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      this.theme.next('dark_mode');

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        this.theme.next(e.matches ? 'dark_mode' : 'light_mode');
        this.ref.tick();
      });
  }
}
