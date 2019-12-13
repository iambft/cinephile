import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { ChartComponent } from './pages/chart/chart.component';
import { TopListComponent } from './pages/top-list/top-list.component';
import { LikedComponent } from './pages/liked/liked.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import { LoadingComponent } from './shared/components/loading/loading.component';
import {ToastrModule} from 'ngx-toastr';
import {CommonModule} from '@angular/common';
import {APP_CONFIG, AppConfig} from './app.config';
import {CorsMocker} from './core/interceptors/cors-mocker.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieCardComponent,
    ChartComponent,
    TopListComponent,
    LikedComponent,
    PageNotFoundComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ChartsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    {provide: HTTP_INTERCEPTORS, useClass: CorsMocker, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static FlexLayoutModule: any;
}
