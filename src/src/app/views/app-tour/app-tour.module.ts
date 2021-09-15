import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppTourComponent } from './app-tour.component';
import { TourRoutes } from './app-tour.routing';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild(TourRoutes)
  ],
  declarations: [AppTourComponent]
})
export class AppTourModule { }
