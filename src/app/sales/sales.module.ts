import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';
import { MyUppercasePipe } from './pipes/myuppercase.pipe';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CanFlyPipe } from './pipes/canfly.pipe';




@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent,
    CanFlyPipe,
    MyUppercasePipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ButtonModule,
    CardModule
  ],
  exports:[
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent
  ]
})
export class SalesModule { }
