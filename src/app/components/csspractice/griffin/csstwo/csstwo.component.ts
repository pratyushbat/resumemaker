import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssotwo',
  templateUrl: './css-position/csspositionsticky.html',
  styleUrls:['./css-position/csspositionsticky.css'],
  standalone: true,
})
export class CssTwoComponent implements OnInit {
  constructor() { 


  }
  ngOnInit(): void {
   this.csstwohtml();
  }
  csstwohtml(){
/*  let h2=document.querySelector('.box-title h2');
    let timmy= setInterval(()=>{
     h2.classList.toggle('nine')
    },2000) */

     document.addEventListener('DOMContentLoaded', ()=>{
            let html = document.documentElement;
            html.style.setProperty('--gcolor', '#bada55');
        })
  }
}
