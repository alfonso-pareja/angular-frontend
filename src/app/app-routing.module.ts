import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTracksComponent } from './list-tracks/list-tracks.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListTracksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
