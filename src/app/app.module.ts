import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatGenericSelfMadeComponent } from './buttons.component';
import { PracticeComponent } from './practice.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './container/login.component';
import { SignupComponent } from './container/signup.component';
import { ApiService } from './services/api.service';
import { AuthRepository } from './repository/auth-repository';
import { HttpService } from './services/http.service';
import { ForgotPasswordComponent } from './container/forgot-password.component';
import { VerificationComponent } from './container/verification.component';
import { OnBoardingComponent } from './container/on-boarding/onboarding.component';

@NgModule({
  declarations: [AppComponent, MatGenericSelfMadeComponent, PracticeComponent,LoginComponent,SignupComponent,ForgotPasswordComponent,VerificationComponent,OnBoardingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
