import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  Component,
  HostBinding,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { constants } from './constants';
import { ShowcaseInViewService } from './services/showcase-in-view.service';
import { ThemingService } from './services/theming.service';

@Component({
  selector: 'obum-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  hasScrolled = false;
  isLargeScreen = false;
  isTabletScreen = false;
  links = [
    { path: '', content: 'About Me' },
    { path: '/articles', content: 'Articles' },
    { path: '/coding', content: 'Coding' },
    { path: '/community', content: 'Community' }
  ];
  themes = constants.THEMES;
  year = (new Date()).getFullYear();

  @HostBinding('class') public cssClass = constants.DEFAULT_THEME;
  @ViewChild('drawer') drawer!: MatSidenav;
  @ViewChild('matSidenavContent') matSidenavContent!: MatSidenavContent;

  constructor(
    private breakpoint: BreakpointObserver,
    private overlayContainer: OverlayContainer,
    public router: Router,
    public showcaseInView: ShowcaseInViewService,
    public themingService: ThemingService
  ) {}

  ngAfterViewInit(): void {
    this.matSidenavContent
      .getElementRef()
      .nativeElement.addEventListener(
        'scroll',
        (event: any) => (this.hasScrolled = event.target.scrollTop > 256)
      );
  }

  ngOnInit(): void {
    this.breakpoint
      .observe('(min-width: 576px)')
      .subscribe((b) => (this.isTabletScreen = b.matches));

    this.breakpoint
      .observe('(min-width: 992px)')
      .subscribe((b) => (this.isLargeScreen = b.matches));

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.drawer.close();
        this.scrollToTop();
      });

    this.themingService.theme.subscribe((theme: string) => {
      this.cssClass = theme;
      const oCClasses = this.overlayContainer.getContainerElement().classList;
      oCClasses.remove(...Array.from(this.themes));
      oCClasses.add(this.cssClass);
    });
  }

  capitalize = (str: string) => str[0].toUpperCase() + str.substring(1);

  changeTheme(): void {
    this.cssClass =
      this.themes.indexOf(this.cssClass) == 0 ? this.themes[1] : this.themes[0];
    this.themingService.theme.next(this.cssClass);
    localStorage.setItem(constants.LS_THEME_KEY, this.cssClass);
    this.drawer.close();
  }

  scrollToTop(): void {
    this.matSidenavContent.getElementRef().nativeElement.scrollTop = 0;
  }
}
