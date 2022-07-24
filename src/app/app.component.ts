import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import {
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  ViewChild
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ObumCard } from './card/card.model';
import { constants } from './constants';
import { tabs } from './content/index';
import { ThemingService } from './theming.service';

declare var document: any;

@Component({
  selector: 'obum-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeTab = Object.keys(tabs)[0];
  content: ObumCard[] = Object.values(tabs)[0];
  mobProfShowInView = false;
  isLargeScreen = false;
  themes = constants.THEMES;
  tabs = tabs;
  @ViewChild('mobileProfileShowcase')
  mobProfShowRef!: ElementRef<HTMLDivElement>;

  get uiTabs(): string[] {
    return Object.keys(tabs);
  }

  @HostBinding('class') public cssClass = constants.DEFAULT_THEME;
  constructor(
    private breakpoint: BreakpointObserver,
    private overlayContainer: OverlayContainer,
    private router: Router,
    public themingService: ThemingService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.breakpoint
      .observe('(min-width: 992px)')
      .subscribe((b) => (this.isLargeScreen = b.matches));

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        const urlParts = (e as NavigationEnd).urlAfterRedirects
          .split('?')[0]
          .split('#')[0]
          .substring(1) // remove the leading slash
          .split('/');

        if (Object.keys(tabs).includes(urlParts[0])) {
          const tab = urlParts[0] as keyof typeof tabs;
          this.content = tabs[tab];
          this.title.setTitle(`${this.capitalize(tab)} | ${constants.TITLE}`);
          this.activeTab = tab;

          if (sessionStorage.getItem('isOld')) {
            if (this.breakpoint.isMatched('(max-width: 991.98px)')) {
              document.querySelector('.mat-sidenav-content').scrollTop =
                this.mobProfShowRef.nativeElement.clientHeight;
            }
          } else {
            sessionStorage.setItem('isOld', 'true');
          }
        } else {
          this.router.navigateByUrl(this.activeTab);
        }
      });

    this.themingService.theme.subscribe((theme: string) => {
      this.cssClass = theme;
      const oCClasses = this.overlayContainer.getContainerElement().classList;
      oCClasses.remove(...Array.from(this.themes));
      oCClasses.add(this.cssClass);
    });
  }

  changeTheme(): void {
    this.cssClass =
      this.themes.indexOf(this.cssClass) == 0 ? this.themes[1] : this.themes[0];
    this.themingService.theme.next(this.cssClass);
    localStorage.setItem(constants.LS_THEME_KEY, this.cssClass);
  }

  capitalize = (str: string) => str[0].toUpperCase() + str.substring(1);

  scrollToTop(): void {
    document.querySelector('.mat-sidenav-content').scrollTop = 0;
  }
}
