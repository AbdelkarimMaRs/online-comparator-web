import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconsComponent } from './mat-icons.component';
import { MatIconsRoutes } from './mat-icons.routing';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule.forChild(MatIconsRoutes)
  ],
  declarations: [MatIconsComponent]
})
export class MatIconsModule { }
