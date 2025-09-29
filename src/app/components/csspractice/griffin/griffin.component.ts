import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  imports: [RouterModule],
  selector: 'app-griffin',
  template: `
  
    <div class="row">
     <button  routerLink="/griffin" class="btn btn-primary">cssone</button>
     <button  routerLink="/griffin/csstwo" class="btn btn-primary">csstwo</button>

     </div>
<router-outlet></router-outlet>

  
  `,
  styles: [
    `
   
    `,
  ],
  standalone: true,
})
export class GriffinComponent {
  constructor() { }
}
