import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { AlertService } from './alert.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { User, UserRes } from '../models/user';
import { AuthUtils } from '../utility/auth-utils';
// import { Resume } from '../models/resume';
import { HttpService } from './http.service';
import { Resume } from '../models/resume';

@Injectable({providedIn:'root'})
export class ApiService {

  constructor(private httpService: HttpService ,private _alertService:AlertService, @Inject(PLATFORM_ID) private platformId: any) {}

  getUsers() {
    this.httpService.get('/users', { page: 2 }).subscribe(
      (data) => {
        console.log(data);
        this._alertService.success('done');
      },
      (err) => {console.log(err);  
        // this._alertService.error('not done');
    }
    );
  }

  loginAndSetToken(body:{email:string,password:string}): Observable<UserRes> {
    return this.httpService.get('/user/login',body).pipe(map(res=>{
      if (isPlatformBrowser(this.platformId)) {
        AuthUtils.setAuthToken(res.token);
      }
       return res;
    }));
  }
  
  signUpUser(body:{
    email:string,password:string,confirm_password:string,
    name:string,job_category:string ,experience_level:string}): Observable<User> {
    return this.httpService.post('/user/signup',body);
  }
  sendResetPasswordEmail(data: { email: string }): Observable<any> {
    return this.httpService.get('/user/reset/password/email', data);
  }

  resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<User> {
    return this.httpService.patch('/user/reset/password', data);
  }

  fetchMe():Observable<User>{
    return this.httpService.get('/user/fetch');
  }
  
  emailverification(body:any):Observable<User>{
    return this.httpService.get('/user/send/emailverification',body);
  }
  fetchAllResumes(): Observable<Resume[]> {
    return this.httpService.get('/resume/all');
  }

  // getResumeById(id:any): Observable<Resume> {
  //   return this.httpService.get('/resume/' + id);
  // }

  saveResume(data: { name: string }) {
    return this.httpService.post('/resume/add/resume', data);
  }

  // editResume(data: { name: string }, resumeId: string) {
  //   return this.httpService.patch('/resume/update/resume/' + resumeId, data);
  // }

  // deleteResume(resumeId: string) {
  //   return this.httpService.delete('/resume/delete/resume/' + resumeId);
  // }
  saveOrUpdateImage(image: File, resumeId: string): Observable<Resume> {
    const formData = new FormData();
    formData.append('profile_image', image);
    return this.httpService.post('/resume/add/image/' + resumeId, formData);
  }

  deleteImage(resumeId: string) {
    return this.httpService.delete('/resume/delete/image/' + resumeId);
  }

  addVideo(resumeId: string, data: { video_url: string }) {
    return this.httpService.patch('/resume/import/video/' + resumeId, data);
  }

  updateContactDetails(data:any, contactDetailId: string) {
    return this.httpService.patch('/resume/update/contactDetails/' + contactDetailId, data);
  }

  addContactDetails(data:any ,resumeId: string) {
    return this.httpService.post('/resume/add/contactDetails/' + resumeId, data);
  }

  addEducation(data:any, resumeId: string) {
    return this.httpService.post('/resume/add/education/' + resumeId, data);
  }

  updateEducation(data:any, educationId: string) {
    return this.httpService.patch('/resume/update/education/' + educationId, data);
  }

  deleteEducation(educationId: string) {
    return this.httpService.delete('/resume/delete/education/' + educationId);
  }

  deleteInterest(interestId: string) {
    return this.httpService.delete('/resume/delete/interest/' + interestId);
  }

  deleteEmploymentHistory(employmentId: string) {
    return this.httpService.delete('/resume/delete/employmentHistory/' + employmentId);
  }

  addEmploymentHistory(data:any, resumeId: string) {
    return this.httpService.post('/resume/add/employmentHistory/' + resumeId, data);
  }

  updateEmploymentHistory(data: any, employmentId: string) {
    return this.httpService.patch('/resume/update/employmentHistory/' + employmentId, data);
  }

  addInterest(data:any ,resumeId: string) {
    return this.httpService.post('/resume/add/interest/' + resumeId, data);
  }

  updateInterest(data: any, interestId: string) {
    return this.httpService.patch('/resume/update/interest/' + interestId, data);
  }

  addSkill(data:any, resumeId: string) {
    return this.httpService.post('/resume/add/skill/' + resumeId, data);
  }

  updateSkill(data: any, skillId: string) {
    return this.httpService.patch('/resume/update/skill/' + skillId, data);
  }

  deleteSkill(skillId: string) {
    return this.httpService.delete('/resume/delete/skill/' + skillId);
  }

  addLanguage(data:any ,resumeId: string) {
    return this.httpService.post('/resume/add/language/' + resumeId, data);

  }

  updateLanguage(data: any, languageId: string) {
    return this.httpService.patch('/resume/update/language/' + languageId, data);
  }

  deleteLanguage(languageId: string) {
    return this.httpService.delete('/resume/delete/language/' + languageId);
  }

  addIndustrialExposure(data:any, resumeId: string) {
    return this.httpService.post('/resume/add/industrialExposure/' + resumeId, data);
  }

  updateIndustrialExposure(data: any, industrialExposureId: string) {
    return this.httpService.patch('/resume/update/industrialExposure/' + industrialExposureId, data);
  }

  deleteIndustrialExposure(industrialExposureId: string) {
    return this.httpService.delete('/resume/delete/industrialExposure/' + industrialExposureId);
  }

  addAward(data:any, resumeId: string) {
    return this.httpService.post('/resume/add/award/' + resumeId, data);
  }

  updateAward(data: any, awardId: string) {
    return this.httpService.patch('/resume/update/awardAchivements/' + awardId, data);
  }

  deleteAward(awardId: string) {
    return this.httpService.delete('/resume/delete/awardAchivements/' + awardId);
  }

  addObjective(data:any, resumeId: string) {
    return this.httpService.post('/resume/add/objective/' + resumeId, data);
  }

  updateObjective(data: any, objectiveId: string) {
    return this.httpService.patch('/resume/update/objective/' + objectiveId, data);
  }

  deleteObjective(objectiveId: string) {
    return this.httpService.delete('/resume/delete/objective/' + objectiveId);
  }

  addReference(data:any ,resumeId: string) {
    return this.httpService.post('/resume/add/refrence/' + resumeId, data);
  }

  updateReference(data: any, referenceId: string) {
    return this.httpService.patch('/resume/update/refrence/' + referenceId, data);
  }

  deleteReference(referenceId: string) {
    return this.httpService.delete('/resume/delete/refrence/' + referenceId);
  }

  addProjectDetail(data:any, resumeId: string) {
    return this.httpService.post('/resume/add/projectDetail/' + resumeId, data);
  }

  updateProjectDetail(data: any, projectDetailId: string) {
    return this.httpService.patch('/resume/update/projectDetail/' + projectDetailId, data);
  }

  deleteProjectDetail(projectDetailId: string) {
    return this.httpService.delete('/resume/delete/projectDetail/' + projectDetailId);
  }

  addStrength(data:any, resumeId: string) {
    return this.httpService.post('/resume/add/strength/' + resumeId, data);
  }

  updateStrength(data: any, strengthId: string) {
    return this.httpService.patch('/resume/update/strength/' + strengthId, data);
  }

  deleteStrength(strengthId: string) {
    return this.httpService.delete('/resume/delete/strength/' + strengthId);
  }

  addWeakness(data:any, resumeId: string) {
    return this.httpService.post('/resume/add/weakness/' + resumeId, data);
  }

  deleteWeakness(weaknessId: string) {
    return this.httpService.delete('/resume/delete/weakness/' + weaknessId);
  }

  updateWeakness(data: any, weaknessId: string) {
    return this.httpService.patch('/resume/update/weakness/' + weaknessId, data);
  }

  updateViewsCount(data: { views: number }, id: string) {
    return this.httpService.patch('/resume/update/resume/views/' + id, data);
  }

  updateOnBoarding(data: { onboarding: number }) {
    return this.httpService.patch('/user/update/onboarding', data);
  }
}
