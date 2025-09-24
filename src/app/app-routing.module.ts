import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatGenericSelfMadeComponent } from './buttons.component';
import { PracticeComponent } from './practice.component';
import { LoginComponent } from './container/login.component';
import { SignupComponent } from './container/signup.component';
import { ForgotPasswordComponent } from './container/forgot-password.component';
import { PasswordResetComponent } from './container/password-reset.component';
import { VerificationComponent } from './container/verification.component';
import { AuthGuard } from './auth-guards/auth-guard.component';
import { AnonGuard } from './auth-guards/anon-guard.component';
import { OnBoardingComponent } from './container/on-boarding/onboarding.component';
import { VerificationInComplete } from './auth-guards/verification-incompleted';
import { VerificationComplete } from './auth-guards/verification-completed';
// import { DashboardComponent } from './layout/dashboard.component';
import { OnBoardingComplete } from './auth-guards/onboarding-complete';
import { OnBoardingIncomplete } from './auth-guards/onboarding-in-complete';
import { OnBoardingIntroComponent } from './container/on-boarding/on-boarding-intro.component';
// import { ResumeComponent } from './dashboard/resume.component';
// import { SettingComponent } from './dashboard/setting.component';
import { ResumeFormComponent } from './container/resume-form.component';
import { UploadComponent } from './container/tabs/upload.component';
import { LogoutComponent } from './components/logout.component';
import { NotFoundComponent } from './container/not-found.component';
import { SingleResumeComponent } from './container/single-resume.component';
import { DashboardComponent } from './container/layout/dashboard.component';
import { ResumeComponent } from './container/dashboard/resume.component';
import { SettingComponent } from './container/dashboard/setting.component';
import { SingleTemplateComponent } from './container/single-template.component';
import { TemplatesComponent } from './container/templates.component';
import { SecondaryComponent } from './container/secondary.component';

// const routes: Routes = [
//   {path:'',component:LoginComponent , canActivate: [AnonGuard],},
//   {path:'login',component:LoginComponent , canActivate: [AnonGuard],},

//   {path:'signup',component:SignupComponent , canActivate: [AnonGuard],  },
//   {path:'forgot-password',component:ForgotPasswordComponent , canActivate: [AnonGuard], },
//   {path:'verify',component:VerificationComponent , canActivate: [AuthGuard], },
//   {path:'password/reset/:code',component:PasswordResetComponent  },
//   {path:'mat-button',component:MatGenericSelfMadeComponent},
//   {path:'practice',component:PracticeComponent}
// ];
const routes: Routes = [
   {
    path: 'second', component: SecondaryComponent
  },
  {
    path: '',
    canActivate: [AnonGuard],
    children: [
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ],
  },
  {
    path: '',
    canActivate: [AuthGuard, VerificationInComplete],
    children: [{ path: 'verify', component: VerificationComponent }],
  },
    {
    path: 'chat', component: SecondaryComponent, outlet: 'chat-r'
  },
   
  {
    path: '',
    canActivate: [AuthGuard, VerificationComplete, OnBoardingIncomplete],
    children: [
      { path: 'on-boarding', component: OnBoardingIntroComponent },
      { path: 'on-boarding/add', component: OnBoardingComponent },
    ],
  },
  {
    path: '',
    canActivate: [AuthGuard, VerificationComplete, OnBoardingComplete],
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },

  { path: 'password/reset/:code', component: PasswordResetComponent },
    {
    path: '',
    children: [{
      path: 'dashboard', component: DashboardComponent,
      children: [{path: 'resume', component: ResumeComponent},
        {path: 'settings', component: SettingComponent},
        {path: 'resume/template/:id', component: TemplatesComponent},
        {path: 'resume/template/:id/:templateId', component: SingleTemplateComponent},
        {path: 'resume/preview/:id', component: SingleResumeComponent},
        {
          path: 'resume/edit/:id', component: ResumeFormComponent
        },
        {path: 'resume/edit/profile/:id', component: UploadComponent}]
    }],
    canActivate: [AuthGuard, VerificationComplete, OnBoardingComplete]
  },
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: NotFoundComponent}
  
  // { path: 'mat-button', component: MatGenericSelfMadeComponent },
  // { path: 'practice', component: PracticeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
