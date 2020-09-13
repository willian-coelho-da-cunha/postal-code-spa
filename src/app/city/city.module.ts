import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**@description Routes.*/
import { CityRoutingModule } from './city-routing.module';

/**@description Angular material.*/
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Library.*/
import { ButtonModule } from '../library/button/button.module';
import { ContainerModule } from '../library/container/container.module';
import { CepFormFieldModule } from '../library/cep-form-field/cep-form-field.module';
import { TextFormFieldModule } from '../library/text-form-field/text-form-field.module';

/**@description Components.*/
import { CityFormComponent } from './city-form/city-form.component';
import { CityListComponent } from './city-list/city-list.component';

@NgModule({
  declarations: [
    CityFormComponent,
    CityListComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    MatSortModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    FlexLayoutModule,
    ButtonModule,
    ContainerModule,
    CepFormFieldModule,
    TextFormFieldModule
  ]
})
export class CityModule { }
