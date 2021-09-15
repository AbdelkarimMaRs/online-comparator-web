import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppCalendarComponent } from './app-calendar.component';
import { CalendarRoutes } from './app-calendar.routing';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {MatListModule} from '@angular/material/list';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    //  CalendarModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forChild(CalendarRoutes),
    CalendarModule,
    MatListModule,
  ],
  declarations: [AppCalendarComponent]
})
export class AppCalendarModule { }
