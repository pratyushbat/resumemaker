// tqCGY8QpEotyKLiyn0WrtF0QCW80oGF7
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  template: `
  <h1> Your reset code is {{codeName}}</h1>
`,
  styles: [` 
`]
})
export class PasswordResetComponent implements OnInit {
    codeName: string|null;



   constructor(route: ActivatedRoute) {
    this.codeName = route.snapshot.paramMap.get('code');
    console.log(this.codeName)
    //do whatever you want with it
  }
  
    ngOnInit(): void {
       
    }




}
