import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PositionDetailsComponent } from './components/position-details/position-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PositionComponent } from './components/position/position.component';
import { PositionsPageComponent } from './components/positions-page/positions-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'positions', component: PositionsPageComponent
  }, {
    path: 'positions/:field', component: PositionsPageComponent
  },
  {
    path: ':positionId/details', component: PositionComponent
    
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
