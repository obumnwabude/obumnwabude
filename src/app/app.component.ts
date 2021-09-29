import { ApplicationRef, Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { constants } from './contants';
import { ThemingService } from './theming.service';

@Component({
  selector: 'obum-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  themes = constants.THEMES;
  socialLinks = [
    { icon: 'facebook', link: 'https://facebook.com/obumnwabude' },
    { icon: 'instagram', link: 'https://instagram.com/obumnwabude' },
    { icon: 'twitter', link: 'https://twitter.com/obumnwabude' },
    { icon: 'linkedin', link: 'https://linkedin.com/in/obumnwabude' },
    { icon: 'medium', link: 'https://obumnwabude.medium.com' },
    { icon: 'dev', link: 'https://dev.to/obumnwabude' },
    { icon: 'hashnode', link: 'https://obumnwabude.hashnode.dev' },
  ];
  @HostBinding('class') public cssClass = constants.DEFAULT_THEME;
  constructor(
    public themingService: ThemingService,
    private appRef: ApplicationRef,
    private overlayContainer: OverlayContainer
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
}
