import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService
} from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { NguiInviewModule } from '@ngui/common';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

const routes: Route[] = [
  {
    path: 'coding',
    children: ['', 'angular', 'firebase', 'flutter', 'nodejs'].map((l) => {
      return { path: l, component: AppComponent };
    })
  },
  {
    path: 'writing',
    children: [
      '',
      'stories',
      'how-to',
      'blog',
      'freecodecamp',
      'keepdeploying'
    ].map((l) => {
      return { path: l, component: AppComponent };
    })
  },
  {
    path: 'events',
    children: ['', 'gdsc', 'genesys', 'mlsa'].map((l) => {
      return { path: l, component: AppComponent };
    })
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    NguiInviewModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    ...(environment.production ? [provideAnalytics(() => getAnalytics())] : []),
    RouterModule.forRoot(routes)
  ],
  providers: [ScreenTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
