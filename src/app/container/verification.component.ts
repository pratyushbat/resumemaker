import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { map, take, takeWhile } from 'rxjs';
import { ApiService } from '../services/api.service';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { AlertService } from '../services/alert.service';

// import { AuthRepository } from '../repository/auth-repository';

@Component({
  selector: 'app-name',
  template: `
    <div class="overlay">
      <div class="ea overlay">
        <div class="ea-column h-40 " style=" justify-content: center">
          <mat-card class="ea-column ea-flex p-20 p-rel res-verification-card">
            <mat-icon style="width:100px;height:100px">unsubscribe</mat-icon>
            <div fxLayout="column" fxLayoutAlign="center center">
              <h1>You haven't Verified your Email yet</h1>
              <p>
                Please verify your email which is sent to
                <strong>{{ email }} </strong> before continuing
              </p>
            </div>
            <button
              mat-raised-button
              color="primary"
              class="primary"
              (click)="sendEmailVerify()"
            >
              Send Email Again
            </button>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .p-rel {
        position: relative;
      }
      .ea-column {
        flex-direction: column;
        box-sizing: border-box;
        display: flex;
        place-content: center;
        align-items: center;
        justify-content: space-between;

        padding: 16px !important;
      }
      .h-40 {
        height: 40%;
      }
      .ea-flex {
        flex: 1 1 100%;
      }
      .p-20 {
        padding: 20px;
      }

      .ea {
        background: linear-gradient(
          to right bottom,
          rgb(125, 226, 97),
          rgb(66, 123, 181)
        );
        place-content: center;
        align-items: center;
        flex-direction: row;
        box-sizing: border-box;
        display: flex;
      }

      mat-icon {
        font-size: 6rem !important;
        color: #16cb99;
        margin-top: 2.5rem !important;
      }

      h1 {
        font-weight: bold;
        font-size: 1.8rem;
        text-align: center;
      }

      button {
        color: white !important;
        background-color: #71e16c !important;
      }

      p {
        text-align: center;
        width: 70%;
      }

      p,
      h1 {
        color: #3fc54b;
      }

      mat-card {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px 10px inset !important;
      }
    `,
  ],
})
export class VerificationComponent implements OnInit, OnDestroy {


  email = '';
  code = '';
  // email$!: any;
  userData$!: any;
  // , private authRepo: AuthRepository
  constructor(private activatedRoute: ActivatedRoute,  private _apiService: ApiService,private alertService: AlertService) {
    this.fetchEmail();
  }
  
  ngOnInit(): void {}
  
  fetchEmail() {
    // this.email$ = this.activatedRoute.queryParams.pipe(
    //   map((data: any) => data.email)
    // );
    // this.email$.subscribe((data: any) => {
    //   this.email = data;
    // });

     this.userData$ = this.activatedRoute.queryParams;
    this.userData$.subscribe((data: any) => {
      this.code = data.code;
      this.email = data.email;
    });
    
    // this.apiService.fetchMe().subscribe((data)=>{
      //     console.log(data);
      //      this.email = data.email;
      // })
      // this.authRepo.fetchMe().pipe(takeWhile(() => this.isAlive)).subscribe(user => {
        //   this.userName = user.name;
        // });
      }
      
      sendEmailVerify() {
        // /send/emailverification
        this._apiService.emailverification({code:this.code,email:this.email}) .subscribe(
      (data: any) => {
        this.alertService.success('Email sent',data);
      },
      (error) => {
        this.alertService.error('Email not sent due to some error');
        console.log(error);
      }
    );
      }

      ngOnDestroy(): void {
    // this.email$?.unsubscribe();
    this.userData$?.unsubscribe();
  }
}
