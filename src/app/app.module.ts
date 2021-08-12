import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouterModule } from './app-router.module';


import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';


//Change app locale configuration
import  localeEs from '@angular/common/locales/es-DO';
import  localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEs);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    FormsModule,
    SharedModule,
    SalesModule
  ],
  providers:[
    {provide: LOCALE_ID, useValue:'es-DO'} //Set app locale to specified language from code es-DO on useValue
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
