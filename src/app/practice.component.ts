import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-button',
  template: `
    



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

<!-- Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license -->
  `,
})
export class PracticeComponent {}
