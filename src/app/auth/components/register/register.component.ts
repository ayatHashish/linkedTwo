import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CheckValidityService } from 'src/app/shared/services/check-validity/check-validity.service';
import { AuthUserService } from '../../services/auth-user.service';
import { TranslationService } from 'src/app/shared/services/i18n/translation.service';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { PublicService } from 'src/app/shared/services/public.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { keys } from 'src/app/shared/configs/localstorage-key';
import { patterns } from 'src/app/shared/configs/patternValidations';
// import { ConfirmPasswordValidator } from 'src/app/shared/configs/confirm-password-validator';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private unsubscribe: Subscription[] = [];
  showNextContent: boolean = false;
  currentLanguage: any;
  checked!: boolean;
  errorMsg = '';
  constructor(
    public checkValidityService: CheckValidityService,
    public translationService: TranslationService,
    private _auth: AuthUserService,
    public alertsService: AlertsService,
    public publicService: PublicService,
    private cdr: ChangeDetectorRef,
    protected _router: Router,
    public fb: FormBuilder
  ) { }
  ngOnInit() {
    this.currentLanguage = window?.localStorage?.getItem(keys?.language);
  }
  RegesterForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl('', [Validators.required, Validators?.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators?.minLength(8), Validators?.maxLength(20),]),
    confirmPassword: new FormControl('', []),
    category: new FormControl('',),
  });

  get firstFormControls(): any {
    return this.RegesterForm?.controls;
  }

  // submitFirstRegForm(): void {
  //   if (this.firstRegForm?.valid) {
  //     this.showNextContent = true;
  //     this.publicService?.show_loader?.next(true);
  //     setTimeout(() => {
  //       this.publicService?.show_loader?.next(false);
  //     }, 1000);
  //   } else {
  //     this.publicService?.show_loader?.next(false);
  //     this.checkValidityService?.validateAllFormFields(this.firstRegForm);
  //   }
  //   this.cdr?.detectChanges();
  // }


  submitFirstRegForm() {
    if (this.RegesterForm.valid) {
      console.log(this.RegesterForm.value)
      this._auth.signup(this.RegesterForm.value).subscribe(
        (res) => {
          // this._auth.isLoggedIn = true;
          console.log(res)
        },
        (e) => {
          this.errorMsg = e.error.error;
          // this._auth.isLoggedIn = false;
        },
        () => {
          this._router.navigateByUrl('/login');
        }
      );
    }

  }
  ngOnDestroy(): void {
    this.unsubscribe?.forEach((sb) => sb?.unsubscribe());
  }

}
