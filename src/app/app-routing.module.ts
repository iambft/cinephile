import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LikedComponent} from './pages/liked/liked.component';
import {TopListComponent} from './pages/top-list/top-list.component';
import {MainComponent} from './pages/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'top-list', component: TopListComponent },
  { path: 'liked', component: LikedComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
