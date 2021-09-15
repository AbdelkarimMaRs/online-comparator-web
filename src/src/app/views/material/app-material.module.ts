import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppAutocompleteComponent } from './app-autocomplete/app-autocomplete.component';
import { AppButtonsComponent } from './app-buttons/app-buttons.component';
import { AppCardComponent } from './app-card/app-card.component';
import { AppGridComponent } from './app-grid/app-grid.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppProgressComponent } from './app-progress/app-progress.component';
import { AppRadioComponent } from './app-radio/app-radio.component';
import { AppSelectComponent } from './app-select/app-select.component';
import { AppSliderComponent } from './app-slider/app-slider.component';
import { AppSnackbarComponent } from './app-snackbar/app-snackbar.component';
import { AppTabComponent } from './app-tab/app-tab.component';

import { MaterialRoutes } from './app-material.routing';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    RouterModule.forChild(MaterialRoutes)
  ],
  declarations: [
    AppAutocompleteComponent,
    AppButtonsComponent,
    AppCardComponent,
    AppGridComponent,
    AppListComponent,
    AppMenuComponent,
    AppProgressComponent,
    AppRadioComponent,
    AppSelectComponent,
    AppSliderComponent,
    AppSnackbarComponent,
    AppTabComponent
  ]
})
export class AppMaterialModule { }
