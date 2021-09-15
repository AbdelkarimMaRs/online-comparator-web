import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoreListComponent} from './store-list/store-list.component';
import {StoreAddComponent} from './store-add/store-add.component';

const routes: Routes = [  {
  path: '',
  children: [{
    path: 'store-list',
    component: StoreListComponent,
    data: { title: 'Store List', breadcrumb: 'STORE LIST' }
  },{
    path: 'store-add',
    component: StoreAddComponent,
    data: { title: 'Add Store', breadcrumb: 'ADD STORE' }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
