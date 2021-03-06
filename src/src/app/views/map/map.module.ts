import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';


import { MapComponent } from './map.component';
import { MapRoutes } from './map.routing';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0' }),
    RouterModule.forChild(MapRoutes)
  ],
  declarations: [MapComponent]
})
export class AppMapModule { }
