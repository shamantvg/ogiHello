import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'home-page',
    component: HomepageComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
