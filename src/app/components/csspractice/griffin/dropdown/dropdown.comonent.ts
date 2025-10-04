import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
  
    <header>
        <h1>DropDown</h1>
    </header>
    <main>
      <form>
        <p class="form-box">
            <label for="region" title="State">  region</label>
            <span class="list">
                <select id="region" name="region" >
                    <optgroup label="States">
                        <option value="ssadas">first</option>
                        <option  value="sec">sec</option>
                        <option selected value="south">south</option>
                        <option value="tast">tast</option>
                        <option value="victo">v</option>
                    </optgroup>
                    <optgroup label="Territories">
                        <option value="ashmore">ashmore</option>
                        <option value="austra">austra</option>
                        <option value="chris">chris</option>
                        <option value="coral">coral</option>
                        <option value="asdsad">asdsad</option>
                    </optgroup>
                </select>
            </span>        
        </p>

         <p class="form-box">
            <label for="city" >City</label>
            <input id="city"  name="city" list="cities" />
         </p>
         <p class="form-box">
           <button id="btnSend">Click Me</button>
         </p>
        

      </form>
       <datalist id="cities">
          <option value="Adelaid"></option>
          <option value="Brisbane"></option>
          <option value="Delhi"></option>
          <option value="Mumbai"></option>
          <option value="New York"></option>
         </datalist>
    </main>

  
  `,
  styles: [
    `
    p{
    margin:0;}
    select,option,datalist,input,label,button{
        font-size:1.5rem;
        color:inherit;
    }

    /* .form-box select{
       flex-basis:80%;
    } */

    p.form-box{
        padding:0.5rem 1rem;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }

    .form-box option:default{
       color:red;
    }

    .form-box label{
        flex-basis:20%;
        flex-shrink:0
    }
    .form-box input{
       flex-basis:80%;
       padding:0 1rem;
    }
    .form-box button {
       flex-basis:auto;
       padding:0 1rem;
       margin-left:20%;
       border-radius:20px;
    }

    .form-box  select {
       background-color:transparent;
       border:none;
       outline:none;
       line-height:2.5rem;
          height:2.5rem;
       width:100%;
       color:white;
       } 
     .list{
       background-color:deepskyblue;
       border-radius:20px;
       overflow:hidden;
       height:2.5rem;
       padding:0 1rem;
       flex-basis:80%;
    } 
       optgroup{
         background-color:grey;
       }

    `,
  ],
  standalone: true,
})
export class DropDownComponent {
  constructor() { }
}
