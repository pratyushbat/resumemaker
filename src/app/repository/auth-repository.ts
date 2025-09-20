
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { combineLatest, map, Observable, take } from 'rxjs';
import { ApiService } from '../services/api.service';
import { User } from '../models/user';
import { isPlatformBrowser } from '@angular/common';
import { AuthUtils } from '../utility/auth-utils';
import { getUser, userLoggedIn, userLoggingIn } from '../reducers';
import { LoginRequestAction, LoginSuccessAction, LogoutAction, UserProfileRequestAction, UserProfileSuccessAction, UserUpdateAction } from '../actions/user-actions';
import { Store } from '@ngrx/store';

@Injectable({providedIn:'root'})
export class AuthRepository {
  constructor(private apiService: ApiService, private store: Store, @Inject(PLATFORM_ID) private platformId: any) {
  }

  login(data: { email: string, password: string }): Observable<User> {
    this.store.dispatch(new LoginRequestAction());
    this.apiService.loginAndSetToken(data).subscribe((res:any) => {
      this.store.dispatch(new LoginSuccessAction(res.user));
    });
    return this.store.select(getUser);
  }

  
  fetchMe(force = false): Observable<User> {
    const loggedIn$ = this.store.select(userLoggedIn);
    const loggingIn$ = this.store.select(userLoggingIn);
    const user$ = this.store.select(getUser);
    combineLatest([loggedIn$, loggingIn$, user$]).pipe(take(1)).subscribe(data => {
      if (!data[0] && !data[1] || force) {
        this.store.dispatch(new UserProfileRequestAction());
        this.apiService.fetchMe().subscribe(user => {
          this.store.dispatch(new UserProfileSuccessAction(user));
        });
      }
    });
    return user$;
  }

  signup(data: {
    email: string, password: string, confirm_password: string,
    name: string, job_category: string, experience_level: string
  }): Observable<User> {
    return this.apiService.signUpUser(data);
  }

  sendResetPasswordEmail(data: { email: string }): Observable<any> {
    return this.apiService.sendResetPasswordEmail(data);
  }

  resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<User> {
    return this.apiService.resetPassword(data);
  }


  logout() {
    if (isPlatformBrowser(this.platformId)) {
      AuthUtils.removeAuthToken();
    }
    this.store.dispatch(new LogoutAction());
  }

  updateProfile(data) {
    const userProfile = {...data, ...{job_category: 'abc', experience_level: 'ads'}};
    return this.apiService.updateUserProfile(userProfile)
      .pipe(map((res) => {
        this.store.dispatch(new UserUpdateAction(res));
      }));
  }

  updatePassword(data) {
    return this.apiService.updatePassword(data);
  }
}
