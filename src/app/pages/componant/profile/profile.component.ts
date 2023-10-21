import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{
  userProfiles:any
  constructor(private _newEducation: ProfileService)
  {
    this.getUserprofile('id')
  }


  getUserprofile(_id:string){
    this._newEducation.getUserprofile(_id).subscribe((res) => {
          this.userProfiles = res;
       console.log(res) },
    )};

}
