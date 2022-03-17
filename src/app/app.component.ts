import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { constants } from './contants';
import { ThemingService } from './theming.service';

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
      label: {
        icon: 'laptop',
        text: 'Coding'
      },
      contents: 'laptop'
    },
    {
      label: {
        icon: 'groups',
        text: 'Events'
      },
      contents: 'groups'
    },
    {
      label: {
        icon: 'drive_file_rename_outline',
        text: 'Writing'
      },
      contents: 'drive_file_rename_outline'
    }
  ];
  @HostBinding('class') public cssClass = constants.DEFAULT_THEME;
  constructor(
    private breakpoint: BreakpointObserver,
    private overlayContainer: OverlayContainer,
    public themingService: ThemingService
  ) {}

  ngOnInit(): void {
    this.breakpoint
      .observe('(min-width: 992px)')
      .subscribe((b) => (this.isLargeScreen = b.matches));
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
    localStorage.setItem(constants.LOCALSTORAGE_THEME_KEY, this.cssClass);
  }

  capitalize(str: string): string {
    return str[0].toUpperCase() + str.substring(1);
  }

  scrollToTop(): void {
    document.querySelector('.mat-sidenav-content').scrollTop = 0;
  }
}
