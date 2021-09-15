import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';


import { DragndropComponent } from './dragndrop.component';
import { DragndropRoutes } from './dragndrop.routing';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,

    RouterModule.forChild(DragndropRoutes),
    DragulaModule
  ],
  declarations: [DragndropComponent]
})
export class DragndropModule { }
