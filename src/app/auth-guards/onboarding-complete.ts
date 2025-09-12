import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { filter, map,  take } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { AuthRepository } from '../repository/auth-repository';

@Injectable({
    providedIn: 'root'
})
export class OnBoardingComplete implements CanActivate {

    constructor(private router: Router, private authRepo: AuthRepository) {

    }

    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): any {
        // return this.apiSerivice.fetchMe().pipe(map(data => {
        //     if (data.onboarding ===200)
        //         return true;
        //     else{
        //         this.router.navigate(['on-boarding']);
        //     }
        // }));
        const user$ = this.authRepo.fetchMe();
        return user$.pipe(filter(data => !!data), map(data => {
                    console.log('OnBoardingComplete');
          if (data.onboarding === 200) {
            return true;
          } else {
            this.router.navigate(['on-boarding']);
          }
        }));
    }

    
}
