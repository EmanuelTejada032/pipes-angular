import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRouterModule } from './app-router.module';


import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';


//Change app locale 
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
    AppRouterModule,
    FormsModule,
    SharedModule,
    SalesModule
  ],
  providers:[
    {provide: LOCALE_ID, useValue:'es-DO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
