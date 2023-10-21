import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from 'src/app/pages/service/profile.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent  {

newLanguageForm = new FormGroup({
    language: new FormControl(''),
    level: new FormControl(''),
  });


  constructor(private _Profile: ProfileService) {}

  get certificationsControls(): any {
    return this.newLanguageForm?.controls;
  }

  handelnewLanguage() {
    if (this.newLanguageForm.valid) {
   console.log(this.newLanguageForm.value)
      this._Profile.newLanguage(this.newLanguageForm.value).subscribe(
        (res) => {console.log(res)

        },
      );
    }
  }


}
