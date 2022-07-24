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
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { NguiInviewModule } from '@ngui/common';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Route[] = [
  { path: 'articles', component: ContentComponent },
  { path: 'coding', component: ContentComponent },
  { path: 'community', component: ContentComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContentComponent,
    HomeComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatSidenavModule,
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
