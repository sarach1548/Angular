import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PositionComponent } from './components/position/position.component';
import { PositionListComponent } from './components/position-list/position-list.component';
import { PositionDetailsComponent } from './components/position-details/position-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PositionFilterComponent } from './components/position-filter/position-filter.component';
import { PositionsPageComponent } from './components/positions-page/positions-page.component';
import { PositionsSentCVListComponent } from './components/positions-sent-cv-list/positions-sent-cv-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PositionComponent,
    PositionListComponent,
    PositionDetailsComponent,
    NotFoundComponent,
    PositionFilterComponent,
    PositionsPageComponent,
    PositionsSentCVListComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    //ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
