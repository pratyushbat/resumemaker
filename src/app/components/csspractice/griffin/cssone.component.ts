import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cssone',
  template: `
  
    <header>
        <h1> CSS  OnePadding and Margins</h1>
        <!--   <h1>CSS Width vs Max-Width</h1> -->
    </header>
    <main>
    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <form>
        <p class="form-box">
        <label for="region" title="State">  region</label>
          <select id="region" name="region" size="5" multiple>
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

    /* to center h1 text */
    header{
      border:3px solid crimson;
      margin:1rem;
      padding:0;
      text-align:center;
    }
    header h1{
      font-size:2rem;
      background-color:lightskyblue;
      margin:1rem auto;
      padding:0rem;
       text-align:center;
      width:50%;
    }
    /* to center h1 text */
      p {
           background-color:cornflowerblue;
           color:cornsilk;
           margin:10px 20px 30px;
           padding:10px 20px 30px;
      }

        main{
        display:block;
            background-color: lightskyblue;
            padding: 1rem;
           /*  min-width: 800px; */
            max-width: 800px;
            /* width means fixed */
           /*  width:400px; */
        }
        main p{
            margin: 1rem auto;
            background-color: white;
            padding: 1rem;
            color:black;
        }
        main p:nth-child(1){
            min-width: 600px;
         /*    width:600px; */
            /* cannot be smaller than 600px */
        }
        main p:nth-child(2){
            max-width: 600px;
            /* can't exceed 600px */
        }


    `,
  ],
  standalone: true,
})
export class CssOneComponent {
  constructor() { }
}
