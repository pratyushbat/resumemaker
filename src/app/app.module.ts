import { NgModule, isDevMode } from '@angular/core';
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
import { UploadComponent } from './container/tabs/upload.component';
import { ImportYoutubeComponent } from './container/tabs/import-youtube.component';
import { UploadFromDiskComponent } from './container/tabs/upload-from-disk.component';
import { UploadImageComponent } from './container/tabs/upload-image.component';
import { ContactDetailsComponent } from './components/resume-form/contact-details.component';
import { ContactDetailFormComponent } from './components/resume-form/resume-dialogues/contact-detail-form.component';
import { EducationComponent } from './components/resume-form/education.component';
import { EducationCardComponent } from './components/resume-form/resume-card/education-card.component';
import { EducationFormComponent } from './components/resume-form/resume-dialogues/education-form.component';
import { EducationListComponent } from './components/resume-form/resume-list/education-list.component';
import { EmploymentHistoryComponent } from './components/resume-form/employment-history.component';
import { EmploymentHistoryCardComponent } from './components/resume-form/resume-card/employment-history-card.component';
import { EmploymentHistoryFormComponent } from './components/resume-form/resume-dialogues/employment-history-form.component';
import { EmploymentHistoryListComponent } from './components/resume-form/resume-list/employment-history-list.component';
import { AwardCardComponent } from './components/resume-form/resume-card/award-card.component';
import { AwardComponent } from './components/resume-form/award.component';
import { AwardFormComponent } from './components/resume-form/resume-dialogues/award-form.component';
import { AwardListComponent } from './components/resume-form/resume-list/award-list.component';
import { IndustrialExposureCardComponent } from './components/resume-form/resume-card/industrial-exposure-card.component';
import { IndustrialExposureComponent } from './components/resume-form/industrial-exposure.component';
import { IndustrialExposureFormComponent } from './components/resume-form/resume-dialogues/industrial-exposure-form.component';
import { IndustrialExposureListComponent } from './components/resume-form/resume-list/industrial-exposure-list.component';
import { InterestCardComponent } from './components/resume-form/resume-card/interest-card.component';
import { InterestComponent } from './components/resume-form/interest.component';
import { InterestListComponent } from './components/resume-form/resume-list/interest-list.component';
import { InterestFormComponent } from './components/resume-form/resume-dialogues/interest-form.component';
import { LanguageCardComponent } from './components/resume-form/resume-card/language-card.component';
import { LanguageComponent } from './components/resume-form/language.component';
import { LanguageFormComponent } from './components/resume-form/resume-dialogues/language-form.component';
import { LanguageListComponent } from './components/resume-form/resume-list/language-list.component';
import { ObjectiveCardComponent } from './components/resume-form/resume-card/objective-card.component';
import { ObjectiveComponent } from './components/resume-form/objective.component';
import { ObjectiveFormComponent } from './components/resume-form/resume-dialogues/objective-form.component';
import { ObjectiveListComponent } from './components/resume-form/resume-list/objective-list.component';
import { ProjectDetailsCardComponent } from './components/resume-form/resume-card/project-details-card.component';
import { ProjectDetailsComponent } from './components/resume-form/project-details.component';
import { ProjectDetailsFormComponent } from './components/resume-form/resume-dialogues/project-details-form.component';
import { ProjectDetailsListComponent } from './components/resume-form/resume-list/project-details-list.component';
import { ReferenceCardComponent } from './components/resume-form/resume-card/reference-card.component';
import { ReferenceComponent } from './components/resume-form/reference.component';
import { ReferenceFormComponent } from './components/resume-form/resume-dialogues/reference-form.component';
import { ReferenceListComponent } from './components/resume-form/resume-list/reference-list.component';
import { SkillCardComponent } from './components/resume-form/resume-card/skill-card.component';
import { SkillFormComponent } from './components/resume-form/resume-dialogues/skill-form.component';
import { SkillListComponent } from './components/resume-form/resume-list/skill-list.component';
import { SkillsComponent } from './components/resume-form/skills.component';
import { StrengthCardComponent } from './components/resume-form/resume-card/strength-card.component';
import { StrengthComponent } from './components/resume-form/strength.component';
import { StrengthFormComponent } from './components/resume-form/resume-dialogues/strength-form.component';
import { StrengthListComponent } from './components/resume-form/resume-list/strength-list.component';
import { WeaknessCardComponent } from './components/resume-form/resume-card/weakness-card.component';
import { WeaknessFormComponent } from './components/resume-form/resume-dialogues/weakness-form.component';
import { WeaknessComponent } from './components/resume-form/weakness.component';
import { WeaknessListComponent } from './components/resume-form/resume-list/weakness-list.component';
// import { HeaderComponent } from './layout/header.component';
// import { DashboardComponent } from './layout/dashboard.component';
// import { SettingComponent } from './dashboard/setting.component';
// import { ResumeComponent } from './dashboard/resume.component';
import { AddOrEditResumeComponent } from './components/dialogues/add-or-edit-resume.component';
import { ResumeCardComponent } from './components/resume-card.component';
import { ProfileSettingsComponent } from './components/profile-settings.component';
import { PasswordComponent } from './components/password.component';
import { NotFoundComponent } from './container/not-found.component';
import {StoreModule} from '@ngrx/store';
import { rootReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SingleResumeComponent } from './container/single-resume.component';
import { TemplateWeaknessCardComponent } from './components/resume-template/template-cards/template-weakness-card.component';
import { TemplateStrengthCardComponent } from './components/resume-template/template-cards/template-strength-card.component';
import { TemplateSkillCardComponent } from './components/resume-template/template-cards/template-skill-card.component';
import { TemplateReferenceComponent } from './components/resume-template/template-cards/template-reference.component';
import { TemplateProjectDetailComponent } from './components/resume-template/template-cards/template-project-detail.component';
import { TemplateObjectiveComponent } from './components/resume-template/template-cards/template-objective.component';
import { TemplateInterestComponent } from './components/resume-template/template-cards/template-interest.component';
import { TemplateLanguageCardComponent } from './components/resume-template/template-cards/template-language-card.component';
import { TemplateIndustrialExposureComponent } from './components/resume-template/template-cards/template-industrial-exposure.component';
import { TemplateEmploymentHistoryComponent } from './components/resume-template/template-cards/template-employment-history.component';
import { TemplateEducationComponent } from './components/resume-template/template-cards/template-education.component';
import { TemplateAwardsComponent } from './components/resume-template/template-cards/template-awards.component';
import { TemplateContactDetailComponent } from './components/resume-template/template-contact-detail.component';
import { TemplateDetailsComponent } from './components/resume-template/template-details.component';
import { TemplateButtonsComponent } from './components/resume-template/template-buttons.component';
import { TraditionalPanelTemplateComponent } from './components/templates/traditional-panel-template.component';
import { RoyalTemplateComponent } from './components/templates/royal-template.component';
import { ModernTemplateComponent } from './components/templates/modern-template.component';
import { ClassicTemplateComponent } from './components/templates/classic-template.component';
import { BluesTemplateComponent } from './components/templates/blues-template.component';
import { VideoComponent } from './components/video.component';
import { TemplateCardComponent } from './components/template-card.component';
import { ErrorComponent } from './components/error.component';
import { HeaderComponent } from './container/layout/header.component';
import { DashboardComponent } from './container/layout/dashboard.component';
import { SettingComponent } from './container/dashboard/setting.component';
import { ResumeComponent } from './container/dashboard/resume.component';
import { SingleTemplateComponent } from './container/single-template.component';
import { TemplatesComponent } from './container/templates.component';
import { FlextBoxPracticeComponent } from './components/csspractice/flexboxpractice.component';
import { HomepageCssComponent } from './components/csspractice/homepage.component';
import { InsideBookComponent } from './components/csspractice/book.component';
import { FormComponent } from './components/csspractice/form.component';
import { TableComponent } from './components/csspractice/table.component';


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
    
      AwardCardComponent,
     AwardComponent,
     AwardFormComponent,
     AwardListComponent,


     ContactDetailsComponent,
     ContactDetailFormComponent,

     EducationComponent,
     EducationCardComponent,
     EducationFormComponent,
     EducationListComponent,
    
     EmploymentHistoryComponent,
     EmploymentHistoryCardComponent,
     EmploymentHistoryFormComponent,
     EmploymentHistoryListComponent,

    IndustrialExposureCardComponent,
    IndustrialExposureComponent,
    IndustrialExposureFormComponent,
    IndustrialExposureListComponent,

    InterestCardComponent,
    InterestComponent,
    InterestListComponent,
    InterestFormComponent,

    LanguageCardComponent,
    LanguageComponent,
    LanguageFormComponent,
    LanguageListComponent,

    ObjectiveCardComponent,
    ObjectiveComponent,
    ObjectiveFormComponent,
    ObjectiveListComponent,

    ProjectDetailsCardComponent,
    ProjectDetailsComponent,
    ProjectDetailsFormComponent,
    ProjectDetailsListComponent,

    ReferenceCardComponent,
    ReferenceComponent,
    ReferenceFormComponent,
    ReferenceListComponent,

    SkillCardComponent,
    SkillFormComponent,
    SkillListComponent,
    SkillsComponent,

    StrengthCardComponent,
    StrengthComponent,
    StrengthFormComponent,
    StrengthListComponent,

    WeaknessCardComponent,
    WeaknessFormComponent,
    WeaknessComponent,
    WeaknessListComponent,

    HeaderComponent,
    DashboardComponent,
    SettingComponent,
    ResumeComponent,
    AddOrEditResumeComponent,
    ResumeCardComponent,
    ProfileSettingsComponent,
    PasswordComponent,
    NotFoundComponent,
    SingleResumeComponent,
    TemplateDetailsComponent,
    TemplateButtonsComponent,
    TemplateContactDetailComponent,
    TemplateAwardsComponent,
    TemplateEducationComponent,
    TemplateEmploymentHistoryComponent,
    TemplateIndustrialExposureComponent,
    TemplateInterestComponent,
    TemplateLanguageCardComponent,
    TemplateObjectiveComponent,
    TemplateProjectDetailComponent,
    TemplateReferenceComponent,
    TemplateSkillCardComponent,
    TemplateStrengthCardComponent,
    TemplateWeaknessCardComponent,
    TraditionalPanelTemplateComponent,
    RoyalTemplateComponent,
    ModernTemplateComponent,
    ClassicTemplateComponent,
    BluesTemplateComponent,
    VideoComponent,

    TemplateCardComponent,
    ErrorComponent,
    SingleTemplateComponent,
    TemplatesComponent,
    FlextBoxPracticeComponent,
    HomepageCssComponent,
    InsideBookComponent,
    FormComponent,
    TableComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer), 
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode in production
    }),
  ],
  providers: [ 

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
