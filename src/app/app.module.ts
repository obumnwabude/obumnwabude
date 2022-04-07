import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NguiInviewModule } from '@ngui/common';

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService
} from '@angular/fire/analytics';
import { Route, RouterModule } from '@angular/router';

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
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    NguiInviewModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    ...(environment.production ? [provideAnalytics(() => getAnalytics())] : [])
  ],
  providers: [ScreenTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
