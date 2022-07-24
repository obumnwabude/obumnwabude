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
import { MatChipsModule } from '@angular/material/chips';
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
  { path: 'articles', component: AppComponent },
  { path: 'coding', component: AppComponent },
  { path: 'community', component: AppComponent },
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
    MatChipsModule,
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
