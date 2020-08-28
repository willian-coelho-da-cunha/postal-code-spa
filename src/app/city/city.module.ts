import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityFormComponent } from './city-form/city-form.component';
import { CityListComponent } from './city-list/city-list.component';


@NgModule({
  declarations: [CityFormComponent, CityListComponent],
  imports: [
    CommonModule,
    CityRoutingModule
  ]
})
export class CityModule { }
