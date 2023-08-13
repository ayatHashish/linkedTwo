import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JopComponent } from './jop/jop.component';

const routes: Routes = [
  {path: 'onboarding', component: OnboardingComponent,},
  {path: 'home', component: HomePageComponent,},
  {path: 'jop', component: JopComponent,},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
