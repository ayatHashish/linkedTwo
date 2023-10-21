import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './componant/profile/profile.component';
import { HomePageComponent } from './componant/home-page/home-page.component';
import { OnboardingComponent } from './componant/onboarding/onboarding.component';
import { JopComponent } from './componant/jop/jop.component';
import { JopDetailsComponent } from './componant/jop-details/jop-details.component';

const routes: Routes = [
  {path: 'onboarding', component: OnboardingComponent,},
  {path: 'home', component: HomePageComponent,},
  {path: 'profile', component: ProfileComponent,},
  {path: 'jop', component: JopComponent,},
  {path: 'jop/:id', component: JopDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
