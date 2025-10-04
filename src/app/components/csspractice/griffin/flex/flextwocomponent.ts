import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flextwo',
  template: `
    <header>
        <h1>Flexbox Nav Menus</h1>
    </header>
    
    <nav class="listnav">
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
        </ul>
    </nav>
    
    
    <nav class="flexnav">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
        <a href="#">Link 5</a>
    </nav>
  `,

  styles: [`
     .listnav{
            background-color: #bada55;
            margin: 1rem 0;
        }
        .listnav ul{
            overflow: auto;
        }
        .listnav li{
            float:left;
            list-style: none;
            width: 20%;
        }
        .listnav a{
            color: #333;
            font-weight: 900;
            text-decoration: none;
            text-align: center;
            display: block; 
        }
        .listnav a:hover{
            color: cornflowerblue;
        }
        
        
        
        .flexnav{
            background-color: #bada55;
            margin: 1rem 0;
            display: flex; /* direction defaults to row */
            justify-content: space-around;
            flex-wrap: nowrap;
            /*
            space-around  .5 1 1 1 1 .5
            space-between  0 1 1 1 1 0
            space-evenly   1 1 1 1 1 1
            */
        }
        .flexnav ul{
            
        }
        .flexnav li{
            
        }
        .flexnav a{
            color: #333;
            font-weight: 900;
            text-decoration: none;
            text-align: center;
            flex: 1 1 100%; /* flex: grow | shrink | basis */
/*            background-color: hsla(0, 0%, 100%, 0.8);*/
        }
        .flexnav a:hover{
            color: cornflowerblue;
        }
    `
  ],
  standalone: true,
})
export class FlexTwoComponent {
  constructor() {}
}
