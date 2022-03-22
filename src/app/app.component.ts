import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { constants } from './constants';
import { ThemingService } from './theming.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { content, links, tabs } from './content';
import { Title } from '@angular/platform-browser';

declare var document: any;

@Component({
  selector: 'obum-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  profileShowcaseInView = false;
  isLargeScreen = false;
  themes = constants.THEMES;
  links = links;
  mainTab = tabs[0].link;
  subTab = tabs[0].children[0].link;
  tabs = tabs;

  get content(): string {
    return (content as any)[this.mainTab][this.subTab];
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

        if (tabs.map((t) => t.link).includes(urlParts[0])) {
          this.mainTab = urlParts[0];
          const cc = this.currentChildren();
          if (
            urlParts.length > 1 &&
            cc.map((c) => c.link).includes(urlParts[1])
          ) {
            this.subTab = urlParts[1];
          } else {
            this.subTab = cc.filter((c) => c.active)[0].link;
          }
          let t = '';
          for (let c of cc) {
            c.active = c.link === this.subTab;
            if (c.active) {
              t = 'title' in c ? c.title : c.view ?? this.capitalize(c.link);
            }
          }
          this.router.navigate([this.mainTab, this.subTab]);
          this.title.setTitle(`${t} | ${constants.TITLE}`);
        } else {
          this.router.navigateByUrl(this.mainTab);
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

  capitalize(str: string): string {
    return str[0].toUpperCase() + str.substring(1);
  }

  changeSubTab(e: MouseEvent) {
    this.subTab = (e.target as HTMLElement).getAttribute('title') ?? '';
    const parent = tabs.filter((t) => t.link === this.mainTab)[0];
    for (let c of parent.children) c.active = c.link === this.subTab;
  }

  currentChildren() {
    return tabs.filter((t) => t.link === this.mainTab)[0].children as any[];
  }

  scrollToTop(): void {
    document.querySelector('.mat-sidenav-content').scrollTop = 0;
  }
}
