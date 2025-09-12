import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  map,
  pipe,
  Observable,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { HttpService } from './services/http.service';
import { ApiService } from './services/api.service';
import { AlertService } from './services/alert.service';
import { UserRes } from './models/user';

@Component({
  selector: 'app-mat-button',
  template: `
    <!-- 
  <div  style=" background-color: rgb(245, 148, 148); width: 30%;">
  <mat-form-field >
    <mat-label>Both a label and a placeholder</mat-label>
    <input matInput placeholder="Simple placeholder" />
  </mat-form-field><br>
  </div>

  <mat-slide-toggle>Toggle me!</mat-slide-toggle><br>
  
  <p>

    "^18.1.0",    latest updated version will installl on npm update <br>
    "18.1.0",    secific version will installl on npm update<br>
    ~18.1.0",    beta version will installl on npm update<br>
  </p>
  
  <mat-card appearance="outlined">
    <mat-card-content>Simple card</mat-card-content>
  </mat-card> 


<h1>Material button</h1>
<button mat-button color="accent">Normal</button>
<button mat-raised-button color="primary">Raised</button>

<hr>
Created by <a href="javascript:void(0)">https://github.com/andreElrico</a>
<hr>

<mat-card  fxLayout="column" fxLayoutAlign="center stretch">
<div fxLayout="row"  fxLayoutGap="20px">
  <mat-form-field fxFlex="30%"> 
    <mat-label> First name</mat-label>
    <input matInput placeholder="FirstName">
  </mat-form-field>
  <mat-form-field fxFlex="70%"> 
    <mat-label> Last name</mat-label>
    <input matInput placeholder="LastName">
  </mat-form-field>
 </div>
   <mat-form-field>
    <mat-label> Email</mat-label>
    <input matInput placeholder="Email">
  </mat-form-field>
</mat-card> -->

    <form
      class="overlay"
      fxLayout="column"
      fxLayoutAlign="center center"
      fxLayoutGap="20px"
      (ngSubmit)="this.signupForm.valid && signup()"
      [formGroup]="signupForm"
    >
      <mat-spinner *ngIf="showSpinner"></mat-spinner>
      <img width="20%" src="../assets/digiresume-green.png" />
      <mat-card fxLayout="column">
        <h2>Login</h2>
        <mat-form-field>
          <input formControlName="email" matInput placeholder="Email" />
          <mat-error>Valid Email is requried</mat-error>
        </mat-form-field>
        <mat-form-field>
          <!-- <mat-label> Password</mat-label> -->
          <input
            type="password"
            formControlName="password"
            matInput
            placeholder="Password"
          />
          <mat-error>(8-12 Digit) Password is requried</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input
            formControlName="confirm_password"
            matInput
            placeholder="confirm password"
          />
          <mat-error>(8-12 Digit) confirm password is requried</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="name" matInput placeholder="name" />
          <mat-error>(8-12 Digit) name is requried</mat-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Select your experience_level</mat-label>
          <select matNativeControl required formControlName="experience_level">
            <option label="--select experience_level --"></option>
            <option value="Engineering">Engineering</option>
            <option value="Construction">Construction</option>
            <option value="Goverment">Goverment</option>
          </select>
          <mat-error>experience level is required</mat-error>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Select your job category</mat-label>
          <select matNativeControl required formControlName="job_category">
            <option label="--select something --"></option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advance">Advance</option>
          </select>
          <mat-error>job category is required</mat-error>
        </mat-form-field>
        <a style="margin-top:2rem" href=""> Forgot Password</a>

        <div
          style="margin-top:2rem"
          fxLayout="row"
          fxLayoutGap="30px"
          fxLayoutAlign="end"
        >
          <button mat-raised-button color="primary" type="submit">
            Signup
          </button>
          <!-- <button
            mat-raised-button
            color="accent"
            type="button"
            (click)="signupT()"
          >
            Signup
          </button> -->
        </div>
      </mat-card>
    </form>
    <form
      class="overlay"
      fxLayout="column"
      fxLayoutAlign="center center"
      fxLayoutGap="20px"
      (ngSubmit)="this.loginForm.valid && login()"
      [formGroup]="loginForm"
    >
      <mat-spinner *ngIf="showSpinner"></mat-spinner>
      <img width="20%" src="../assets/digiresume-green.png" />
      <mat-card fxLayout="column">
        <h2>Login</h2>
        <mat-form-field>
          <input formControlName="email" matInput placeholder="Email" />
          <mat-error>Valid Email is requried</mat-error>
        </mat-form-field>
        <mat-form-field>
          <!-- <mat-label> Password</mat-label> -->
          <input
            type="password"
            formControlName="password"
            matInput
            placeholder="Password"
          />
          <mat-error>(8-12 Digit) Password is requried</mat-error>
        </mat-form-field>

        <a style="margin-top:2rem" href=""> Forgot Password</a>

        <div
          style="margin-top:2rem"
          fxLayout="row"
          fxLayoutGap="30px"
          fxLayoutAlign="end"
        >
          <button mat-raised-button color="primary" type="submit">Login</button>
          <!-- <button
            mat-raised-button
            color="accent"
            type="button"
            (click)="signupT()"
          >
            Signup
          </button> -->
        </div>
      </mat-card>
    </form>
  `,
  styles: [
    `
      .overlay {
        width: 100%;
        height: 100%;
      }
      mat-card {
        width: 35rem;
        height: 33rem;
      }
      button {
        color: white !important;
      }
      mat-spinner {
        align-self: center;
      }
    `,
  ],
})
export class PracticeComponent implements OnDestroy, OnInit {
  loginForm: FormGroup;

  signupForm: FormGroup;
  // myObserver!: Observable<any>;
  showSpinner: boolean = false;
  userRes!: UserRes;
  constructor(
    private apiService: ApiService,
    private alertService: AlertService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ]),
    });

    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ]),
      confirm_password: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      experience_level: new FormControl(null, [Validators.required]),
      job_category: new FormControl(null, [Validators.required]),
    });

    // this.myObserver = this.loginForm.valueChanges.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   map((data) => data.email)
    // );
  }
  ngOnInit(): void {
    // this.myObserver.subscribe((data) => {
    //   console.log(data);
    // });
    // const data: any = { page: 2 };
    // this.apiService.getUsers(data).subscribe(
    //   (data) => {
    //     this.alertService.success('Users get Successfully', 9000);
    //     console.log(data);
    //   },
    //   (err) => this.alertService.error('Failed users ', 9000)
    // );
  }

  login() {
    console.log(this.signupForm.value);
    // this.showSpinner = true;
    // this.apiService.login(this.loginForm.value).subscribe(
    //   (data: UserRes) => {
    //     this.userRes = data;
    //     console.log(this.userRes);
    //     this.showSpinner = false;
    //     this.alertService.success('login successful');
    //   },
    //   (err) => (this.showSpinner = false)
    // );
  }
  signup() {
    console.log(this.signupForm.value);
    // this.showSpinner = true;
    // this.apiService.signUp(this.signupForm.value).subscribe(
    //   (data) => {
    //     this.showSpinner = false;
    //     this.alertService.success('signup successful');
    //   },
    //   (err) => (this.showSpinner = false)
    // );
  }

  ngOnDestroy(): void {}
}
