import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';

import { ProfileComponent } from './componant/profile/profile.component';
import { TopProfileComponent } from './componant/profile/top-profile/top-profile.component';
import { EducationComponent } from './componant/profile/education/education.component';
import { HomePageComponent } from './componant/home-page/home-page.component';
import { JopSearchComponent } from './componant/jop-search/jop-search.component';
import { JopSelectedComponent } from './componant/jop-selected/jop-selected.component';
import { JopComponent } from './componant/jop/jop.component';
import { OnboardingComponent } from './componant/onboarding/onboarding.component';
import { RecentComponent } from './componant/recent/recent.component';
import { RecommendedComponent } from './componant/recommended/recommended.component';
import { ExpSkillComponent } from './componant/profile/exp-skill/exp-skill.component';
import { LangComponent } from './componant/profile/lang/lang.component';
import { AboutComponent } from './componant/profile/about/about.component';
import { ExperienceComponent } from './componant/profile/experience/experience.component';
import { CertificationsComponent } from './componant/profile/certifications/certifications.component';
import { JopDetailsComponent } from './componant/jop-details/jop-details.component';

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
    ProfileComponent,
    TopProfileComponent,
    EducationComponent,
    ExpSkillComponent,
    LangComponent,
    AboutComponent,
    ExperienceComponent,
    CertificationsComponent,
    JopDetailsComponent,
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

  , exports: [
    PagesComponent,
    OnboardingComponent,

  ]
})
export class PagesModule { }
