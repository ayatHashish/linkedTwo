import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/pages/service/profile.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent  {



  constructor(private _Profile: ProfileService, private _router: Router) { }
  isSubmitted = false;
  errorMsg = '';
 certificationsForm = new FormGroup({
    title: new FormControl(''),
    issuer: new FormControl(''),
    issuedAt: new FormControl(''),
    link: new FormControl(''),

  });


  get certificationsControls(): any {
    return this.certificationsForm?.controls;
  }

  certifications() {
    if (this.certificationsForm.valid) {
   console.log(this.certificationsForm.value)
      this._Profile.newCertification(this.certificationsForm.value).subscribe(
        (res) => {console.log(res)

        },
        (e) => { this.errorMsg = e.error.error; },
      );
    }
  }

}
