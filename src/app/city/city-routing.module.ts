import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityFormComponent } from './city-form/city-form.component';
import { CityListComponent } from './city-list/city-list.component';

const cityRoutes: Routes = [
  {
    path: '',
    component: CityListComponent
  },
  {
    path: 'add',
    component: CityFormComponent
  },
  {
    path: 'list',
    component: CityListComponent
  },
  {
    path: 'edit/:id',
    component: CityFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(cityRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CityRoutingModule { }
