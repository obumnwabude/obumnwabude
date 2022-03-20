import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
    children: [
      { path: '', component: AppComponent },
      { path: 'angular', component: AppComponent },
      { path: 'nodejs', component: AppComponent }
    ]
  },
  {
    path: 'writing',
    children: [
      { path: '', component: AppComponent },
      { path: 'stories', component: AppComponent },
      { path: 'how-to', component: AppComponent },
      { path: 'blog', component: AppComponent }
    ]
  },
  {
    path: 'events',
    children: [
      { path: '', component: AppComponent },
      { path: 'gdsc', component: AppComponent },
      { path: 'genesys', component: AppComponent },
      { path: 'mlsa', component: AppComponent }
    ]
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
    MatIconModule,
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
