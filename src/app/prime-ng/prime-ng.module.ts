import { NgModule } from '@angular/core';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';




@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
