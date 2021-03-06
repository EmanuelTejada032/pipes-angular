import { NgModule } from '@angular/core';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';



@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    FieldsetModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
