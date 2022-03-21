import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { constants } from './contants';
import { ThemingService } from './theming.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { content } from './content';

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
  socialLinks = [
    { icon: 'facebook', link: 'https://facebook.com/obumnwabude' },
    { icon: 'instagram', link: 'https://instagram.com/obumnwabude' },
    { icon: 'twitter', link: 'https://twitter.com/obumnwabude' },
    { icon: 'linkedin', link: 'https://linkedin.com/in/obumnwabude' },
    { icon: 'github', link: 'https://github.com/obumnwabude' },
    { icon: 'medium', link: 'https://stories.obumnwabude.com' },
    { icon: 'dev', link: 'https://dev.to/obumnwabude' },
    { icon: 'hashnode', link: 'https://blog.obumnwabude.com' }
  ];
  tabs = [
    {
      link: 'coding',
      icon: 'laptop',
      children: [
        { active: true, icon: 'angular', link: 'angular', view: 'Angular' },
        { active: false, icon: 'nodejs', link: 'nodejs', view: 'NodeJS' },
        { active: false, icon: 'flutter', link: 'flutter', view: 'Flutter' }
      ]
    },
    {
      link: 'writing',
      icon: 'drive_file_rename_outline',
      children: [
        { active: true, icon: 'medium', link: 'stories', view: 'Stories' },
        { active: false, icon: 'dev', link: 'how-to', view: 'How To' },
        { active: false, icon: 'hashnode', link: 'blog', view: 'Blog' }
      ]
    },
    {
      link: 'events',
      icon: 'groups',
      children: [
        { active: true, icon: 'gdsc', link: 'gdsc', view: 'GDSC' },
        { active: false, icon: 'genesys', link: 'genesys', view: 'Genesys' },
        { active: false, icon: 'microsoft', link: 'mlsa', view: 'MLSA' }
      ]
    }
  ];
  activeTabMain = this.tabs[0].link;
  activeTabSub = this.tabs[0].children[0].link;

  get content(): string {
    return (content as any)[this.activeTabMain][this.activeTabSub];
  }

  @HostBinding('class') public cssClass = constants.DEFAULT_THEME;
  constructor(
    private breakpoint: BreakpointObserver,
    private overlayContainer: OverlayContainer,
    private router: Router,
    public themingService: ThemingService
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

        if (this.tabs.map((t) => t.link).includes(urlParts[0])) {
          this.activeTabMain = urlParts[0];
          const cc = this.currentChildren();
          if (
            urlParts.length > 1 &&
            cc.map((c) => c.link).includes(urlParts[1])
          ) {
            this.activeTabSub == urlParts[1];
            for (let c of cc) c.active = c.link === this.activeTabSub;
            this.router.navigate([this.activeTabMain, this.activeTabSub]);
          } else {
            this.activeTabSub = cc[0].link;
            this.router.navigate([this.activeTabMain, this.activeTabSub]);
          }
        } else {
          this.router.navigateByUrl(this.activeTabMain);
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
    this.activeTabSub = (e.target as HTMLElement).getAttribute('title') ?? '';
    const parent = this.tabs.filter((t) => t.link === this.activeTabMain)[0];
    for (let c of parent.children) c.active = c.link === this.activeTabSub;
  }

  currentChildren() {
    return this.tabs.filter((t) => t.link === this.activeTabMain)[0].children;
  }

  scrollToTop(): void {
    document.querySelector('.mat-sidenav-content').scrollTop = 0;
  }
}
