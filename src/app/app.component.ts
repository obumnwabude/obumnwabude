import { ApplicationRef, Component, HostBinding, OnInit } from '@angular/core';
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
  mBSCInView = false;
  themes = constants.THEMES;
  socialLinks = [
    { icon: 'facebook', link: 'https://facebook.com/obumnwabude' },
    { icon: 'instagram', link: 'https://instagram.com/obumnwabude' },
    { icon: 'twitter', link: 'https://twitter.com/obumnwabude' },
    { icon: 'linkedin', link: 'https://linkedin.com/in/obumnwabude' },
    { icon: 'github', link: 'https://github.com/obumnwabude' },
    { icon: 'medium', link: 'https://obumnwabude.medium.com' },
    { icon: 'dev', link: 'https://dev.to/obumnwabude' },
    { icon: 'hashnode', link: 'https://obumnwabude.hashnode.dev' }
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
        icon: 'drive_file_rename_outline',
        text: 'Writing'
      },
      contents: 'drive_file_rename_outline'
    },
    {
      label: {
        icon: 'campaign',
        text: 'Speaking'
      },
      contents: 'campaign'
    },
    {
      label: {
        icon: 'groups',
        text: 'Community'
      },
      contents: 'groups'
    }
  ];
  @HostBinding('class') public cssClass = constants.DEFAULT_THEME;
  constructor(
    private appRef: ApplicationRef,
    private overlayContainer: OverlayContainer,
    public themingService: ThemingService
  ) {}

  ngOnInit(): void {
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
    this.appRef.tick();
  }

  capitalize(str: string): string {
    return str[0].toUpperCase() + str.substring(1);
  }

  scrollToTop(): void {
    document.querySelector('.mat-sidenav-content').scrollTop = 0;
  }
}
