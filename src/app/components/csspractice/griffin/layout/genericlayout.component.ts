import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genericlayout',
  templateUrl: 'genlayout.component.html',
  styleUrls:['./genlayout.component.css'],
  standalone: true,
})
export class GenericLayOutComponent implements OnInit {
  constructor() { 


  }
  ngOnInit(): void {

            document.getElementById('btnToggle').addEventListener('click', (ev) => {
                ev.preventDefault();
                let main = document.querySelector('main');
                if (main.classList.contains('cards')) {
                    main.className = 'rows';
                } else {
                    main.className = 'cards';
                }
            })
  
  }

}
