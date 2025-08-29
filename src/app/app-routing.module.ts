import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatGenericSelfMadeComponent } from './buttons.component';
import { PracticeComponent } from './practice.component';

const routes: Routes = [
  {path:'mat-button',component:MatGenericSelfMadeComponent},
  {path:'practice',component:PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
