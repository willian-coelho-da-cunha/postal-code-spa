import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**@description Services.*/
import { AuthGuardService } from '../login/guard/auth-guard.service';

/**@description Components.*/
import { CityFormComponent } from './city-form/city-form.component';
import { CityListComponent } from './city-list/city-list.component';

const cityRoutes: Routes = [
  {
    path: '',
    component: CityListComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'add',
    component: CityFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'list',
    component: CityListComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'edit/:id',
    component: CityFormComponent,
    canActivate: [ AuthGuardService ]
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
