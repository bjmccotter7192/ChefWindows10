import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './Heroes/hero-details.component';
import { HeroService } from './Heroes/hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ]),
  ],
  declarations: [
     AppComponent,
     HeroDetailComponent,
     HeroesComponent,
     DashboardComponent
  ],
  providers:[
    HeroService
  ],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }