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
import { ResumeFormComponent, TEST_TOKEN } from './container/resume-form.component';
import { ResumeNameComponent } from './container/on-boarding/resume-name.component';
import { UploadComponent } from './container/on-boarding/tabs/upload.component';
import { ImportYoutubeComponent } from './container/on-boarding/tabs/import-youtube.component';
import { UploadFromDiskComponent } from './container/on-boarding/tabs/upload-from-disk.component';
import { UploadImageComponent } from './container/on-boarding/tabs/upload-image.component';
import { ContactDetailsComponent } from './components/resume-form/contact-details.component';
import { ContactDetailFormComponent } from './components/resume-form/resume-dialogues/contact-detail-form.component';
import { EducationComponent } from './components/resume-form/education.component';
import { EducationCardComponent } from './components/resume-form/resume-card/education-card.component';
import { EducationFormComponent } from './components/resume-form/resume-dialogues/education-form.component';
import { EducationListComponent } from './components/resume-form/resume-list/education-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    MatGenericSelfMadeComponent,
     PracticeComponent,
     LoginComponent,
     SignupComponent,
     ForgotPasswordComponent,
     VerificationComponent,
     OnBoardingComponent,
     ResumeFormComponent,
     ResumeNameComponent,
     UploadComponent,
     UploadImageComponent,
     UploadFromDiskComponent,
     ImportYoutubeComponent,
     
     ContactDetailsComponent,
     ContactDetailFormComponent,
     EducationComponent,
     EducationCardComponent,
     EducationFormComponent,
     EducationListComponent

    ],
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
  providers: [ { provide: TEST_TOKEN, useFactory: () => 'HELLO FACTORY TEST' },],
  bootstrap: [AppComponent],
})
export class AppModule {}
