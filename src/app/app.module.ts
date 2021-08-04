import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//prime ng
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PrimeNgModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
