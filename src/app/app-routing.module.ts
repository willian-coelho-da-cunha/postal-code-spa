import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**@description Services.*/
import { AuthGuardService } from './login/guard/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'city',
    loadChildren: () => import('./city/city.module').then(module => module.CityModule),
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
