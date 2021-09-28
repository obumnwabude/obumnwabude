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
}
