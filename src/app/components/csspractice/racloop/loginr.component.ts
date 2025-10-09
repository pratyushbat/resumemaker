import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
/* import { IConfig, NgxMaskModule } from 'ngx-mask'; */

/* export const options: Partial<IConfig>  = null; */

@Component({
    selector: 'app-loginr',
    templateUrl: 'loginr.component.html',
    styleUrls: ['loginr.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
/*       NgxMaskModule.forRoot(options), */
    ]
})
export class LoginRacloopComponent implements OnInit {
    loginForm: FormGroup;
    usernameType: string = 'Email';
    show_countries: boolean = false;
    countryList: any[] = [];
    isLogin: boolean = false;
    btnForgotSpinner: boolean = false;
    user: CLPUser = <CLPUser>{};
    placeHolder: string = '';
    countryCode: string;
    mobile_mask: string = '(000) 000-0000';
    constructor(private fb: FormBuilder) {

        this.loginForm = this.prepareLoginForm();
        this.loginForm.reset();

    }


    ngOnInit(): void {
    }

    private prepareLoginForm(): FormGroup {
        return this.fb.group({
            email: [{ value: '' }, [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/)]],
            countryId: [{ value: -1 }],
            mobile: [{ value: '' }, [Validators.required]],
            password: [{ value: '' }, [Validators.required]],
            rememberMe: [{ value: false }]
        });
    }


    get loginFrm() {
        return this.loginForm.controls;
    }
    logInEnabled() {
        if (this.usernameType == 'Mobile') {
            if (!this.loginFrm.mobile.value)
                return true;
            else {
                if (this.loginFrm.mobile.errors && (this.loginFrm.mobile.touched || this.loginFrm.mobile.dirty))
                    return true;
            }
        }
        else {
            if (!this.loginFrm.email.value)
                return true;
            else {
                if (this.loginFrm.email.errors && (this.loginFrm.email.touched || this.loginFrm.email.dirty))
                    return true;
            }
        }

        if (!this.loginFrm.password.value)
            return true;

        return false;
    }

    public login() {
        this.loginForm.controls.password.setValidators([Validators.required]);
        var loginFormValid;
        if (this.usernameType == 'Email') {
            this.loginForm.controls.mobile.setValue('');
            loginFormValid = this.loginForm.get('email').valid && this.loginForm.get('password').valid;
        }
        else {
            loginFormValid = this.loginForm.get('mobile').valid && this.loginForm.get('password').valid;
            this.loginForm.controls.email.setValue('');
        }

        this.validateAllFormFields(this.loginForm);
        if (loginFormValid) {
            this.loginForm.markAsPristine();
            /*   this.encyryptCred();
              this.authenticateUser(); */
        }
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched();
                control.updateValueAndValidity();
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }


    public async forgetPassword() {
        const passwordText = this.loginForm.get("password");
        if (!passwordText)
            passwordText.clearValidators();

        if (this.usernameType == 'Email') {
            this.loginForm.get("mobile").clearValidators();
            this.loginForm.controls.email.setValidators([Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/)]);
        }
        else if (this.usernameType == 'Mobile') {
            this.loginForm.get("email").clearValidators();
            this.loginForm.controls.mobile.setValidators([Validators.required]);
        }

        this.validateAllFormFields(this.loginForm);
        if (this.loginForm.valid) {
            this.loginForm.markAsPristine();
            this.copyUserFormValuesToDataObject();
            if (!this.user && !this.user.userName) {
                this.btnForgotSpinner = true;
                /* await this._userService.forgotPassword(this.user.userName)
                  .then(async (result: SimpleResponse) => {
                    if (result) {
                      this.btnForgotSpinner = false;
                      if (result.messageBool)
                        this.notifyService.showSuccess(result.messageString, "");
                      else
                        this.notifyService.showError(result.messageString, "", 8000);
                    }
                  })
                  .catch((err: HttpErrorResponse) => {
                    this._userService.auditLog(ActionType.ForgetError, isNullOrUndefined(this.user) ? 0 : this.user.cLPUserID, err.message, "", "")
                    console.log(err);
                    this.btnForgotSpinner = false;
                  }); */
            }
            this.loginForm.controls.password.setValidators([Validators.required]);
        }
    }


    copyUserFormValuesToDataObject() {
        this.user = <CLPUser>{};
        if (this.usernameType == 'Email')
            this.user.userName = this.loginForm.get("email").value;
        else if (this.usernameType == 'Mobile')
            this.user.userName = this.loginForm.get("mobile").value;
    }
}
export interface CLPUser {
    cLPUserID: number;
    cLPSSID: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    cLPCompanyID: number;
    userRole: number;
    teamCode: number;
    encryptedPassword: string;
    //pwd: string;
    /*   resetPassword: ResetPassword; */
    currentDeviceId: string;
    isPasswordAdmin: boolean;
    companyName: string;
    slurpyUserId: number;
    slurpyCompanyId: number;
    isShowCP: boolean;
    status: number;
    //contact-module
    fullName: string
    officeCode: number


    //cLPSSID: number;
    //employeeID: number;
    permissions: number;
    changePW: number;
    timeZone: number;
    timeZoneWinId: number;
    dateFormatId: number;
    password: string;
    //question: string;
    //answer: string;
    //middleInitial: string;
    //title: string;
    //add1: string;
    //add2: string;
    //add3: string;
    //city: string;
    //state: string;
    //zip: string;
    //country: string;
    //enableSkype: number;
    phone: string;
    mobile: string;
    //altPhone: string;
    //fax: string;
    //enableFax2Mail: boolean;
    //fax2EmailFrom: string;
    //otherEmail: string;
    //useBothEmail: boolean;
    //emailFormat: number;
    //defaultSignature: string;
    //hTMLSignature: string;
    //fromDisplayName: string;
    //uAlias: string;
    //emailTemplateID: number;
    //helpMode: boolean;
    //isNewUser: boolean;
    //dShareContact: boolean;
    //dOutlookSync: boolean;
    isAllowDownload: boolean;
    //facebookURL: string;
    //twitterURL: string;
    //linkedInURL: string;
    //enableCLPSMTP: boolean;
    //enableiPhone: boolean;
    //dtCreated: Date;
    //txtMsgLongCode: string;
    //dtPassword: Date;
    //failedAttempts: number;
    //pwdChangeInDay: number;
    //isLocked: number;
    //dtlocked: Date;
    //passwordHash: string;
    //    countryCode: string;
    country: string;
    theme: number;

}