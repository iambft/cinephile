import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MoveCardComponent } from './shared/components/move-card/move-card.component';
import { ChartComponent } from './pages/chart/chart.component';
import { TopListComponent } from './pages/top-list/top-list.component';
import { LikedComponent } from './pages/liked/liked.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoveCardComponent,
    ChartComponent,
    TopListComponent,
    LikedComponent,
    PageNotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static FlexLayoutModule: any;
}
