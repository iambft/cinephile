import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MoveCardComponent } from './shared/components/move-card/move-card.component';
import { MainComponent } from './pages/main/main.component';
import { TopListComponent } from './pages/top-list/top-list.component';
import { LikedComponent } from './pages/liked/liked.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoveCardComponent,
    MainComponent,
    TopListComponent,
    LikedComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
