import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { constants } from './contants';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  theme = new BehaviorSubject(
    localStorage.getItem(constants.LS_THEME_KEY)
      ? localStorage.getItem(constants.LS_THEME_KEY)!
      : constants.DEFAULT_THEME
  );

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    isPlatformBrowser(platformId) &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localStorage.getItem(constants.LS_THEME_KEY) &&
      this.theme.next('dark_mode');

    isPlatformBrowser(platformId) &&
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) =>
          this.theme.next(e.matches ? 'dark_mode' : 'light_mode')
        );
  }
}
