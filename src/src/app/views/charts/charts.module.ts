import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsComponent } from './charts.component';
import { ChartsRoutes } from './charts.routing';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,

    RouterModule.forChild(ChartsRoutes),
    ChartsModule
  ],
  declarations: [ChartsComponent]
})
export class AppChartsModule { }
