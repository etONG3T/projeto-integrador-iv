import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportsRoutingModule } from './imports-routing-module';
import { Components } from './components/components';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule,
    ImportsRoutingModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class ImportsModule { }
