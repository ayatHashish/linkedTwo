import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/pages/service/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {



  constructor(private _Profile: ProfileService, private _router: Router) { }
  isSubmitted = false;
  errorMsg = '';
  experienceForm = new FormGroup({
    title: new FormControl(''),
    jobType: new FormControl(''),
    since: new FormControl(''),
    to: new FormControl(''),
    location: new FormControl(''),
  });
  get certificationsControls(): any {
    return this.experienceForm?.controls;
  }
 ngOnInit(): void {
    // this.currentLanguage = window?.localStorage?.getItem(keys?.language);
  }
  experienceFunction() {
    if (this.experienceForm.valid) {
   console.log(this.experienceForm.value)
      this._Profile.newExperience(this.experienceForm.value).subscribe(
        (res) => {console.log(res)

        },
        (e) => { this.errorMsg = e.error.error; },
      );
    }
  }
}
