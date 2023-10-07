import { TranslationService } from './../../../shared/services/i18n/translation.service';
import { keys } from './../../../shared/configs/localstorage-key';
import { AppRoutes } from './../../../shared/configs/routes';
import { patterns } from './../../../shared/configs/patternValidations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicService } from './../../../shared/services/public.service';
import { AlertsService } from './../../../core/services/alerts/alerts.service';
import { CheckValidityService } from './../../../shared/services/check-validity/check-validity.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthUserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
 

  constructor(private _auth: AuthUserService, private _router: Router) { }
  isSubmitted = false;
  errorMsg = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  get email() { return this.loginForm.get("email") }
  get password() { return this.loginForm.get("password") }
 ngOnInit(): void {
    // this.currentLanguage = window?.localStorage?.getItem(keys?.language);
  }
  handlelogin() {

   
    if (this.loginForm.valid) {

   console.log(this.loginForm.value)
    
      this._auth.login(this.loginForm.value).subscribe(
        (res) => {
          console.log(res)
          // this._auth.isLoggedIn = true;
        },
        (e) => {
          this.errorMsg = e.error.error;
          // this._auth.isLoggedIn = false;
        },
        () => {
          this._router.navigateByUrl('/home');
        }
      );
    }
  }

  forgetPassWord(){
    this._router.navigateByUrl('/forget');
  }
}
