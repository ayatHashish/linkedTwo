import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/pages/service/profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent  {

  newEducationForm = new FormGroup({
    collegeName: new FormControl(''),
    since: new FormControl(''),
    to: new FormControl(''),
    degree: new FormControl(''),
  });


  constructor(private _Profile: ProfileService) {}

  get certificationsControls(): any {
    return this.newEducationForm?.controls;
  }

  handelNewEducation() {
    if (this.newEducationForm.valid) {
   console.log(this.newEducationForm.value)
      this._Profile.newEducation(this.newEducationForm.value).subscribe(
        (res) => {console.log(res)

        },
      );
    }
  }

}

