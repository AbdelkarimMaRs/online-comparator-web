import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreAddComponent } from './store-add/store-add.component';

// import { FileUploadModule} from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
// import {ChartsModule} from 'ng2-charts/ng2-charts';
import {CommonPipesModule} from '../../pipes/common/common-pipes.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        StoreRoutingModule,
        MatRadioModule,
        MatCheckboxModule,
        MatCardModule,
        MatTabsModule,
        MatIconModule,
        MatProgressBarModule,
        // FileUploadModule,
        MatFormFieldModule,


        MatButtonModule,
        FileUploadModule,

    ],
  declarations: [StoreListComponent, StoreAddComponent]
})
export class StoreModule { }
