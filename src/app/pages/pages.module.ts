import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { RecentComponent } from './recent/recent.component';
import { JopComponent } from './jop/jop.component';
import { JopSearchComponent } from './jop-search/jop-search.component';
import { JopSelectedComponent } from './jop-selected/jop-selected.component';



@NgModule({
  declarations: [
    PagesComponent,
    OnboardingComponent,
    HomePageComponent,
    RecommendedComponent,
    RecentComponent,
    JopComponent,
    JopSearchComponent,
    JopSelectedComponent,

  ],
  imports: [
    ReactiveFormsModule,
    PagesRoutingModule,
    AgmCoreModule,
    CommonModule,
    SharedModule,
    FormsModule,
    CoreModule
  ]

  ,exports :[
    PagesComponent,
    OnboardingComponent,

  ]
})
export class PagesModule { }
