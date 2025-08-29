import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatGenericSelfMadeComponent } from './buttons.component';
import { PracticeComponent } from './practice.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    MatGenericSelfMadeComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
        FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
