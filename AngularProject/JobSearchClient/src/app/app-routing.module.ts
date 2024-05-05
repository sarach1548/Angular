
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PositionListComponent } from './components/position-list/position-list.component';
import { PositionDetailsComponent } from './components/position-details/position-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PositionComponent } from './components/position/position.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'positions/:field?', component: PositionListComponent, children: [
      {
        path: 'position', component: PositionComponent, children: [
          { path: 'details', component: PositionDetailsComponent }]
      }]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
