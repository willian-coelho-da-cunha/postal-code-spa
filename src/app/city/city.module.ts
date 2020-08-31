import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';

import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CancelButtonModule } from '../library/cancel-button/cancel-button.module';
import { SubmitButtonModule } from '../library/submit-button/submit-button.module';
import { CepFormFieldModule } from '../library/cep-form-field/cep-form-field.module';
import { TextFormFieldModule } from '../library/text-form-field/text-form-field.module';

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
    CancelButtonModule,
    SubmitButtonModule,
    CepFormFieldModule,
    TextFormFieldModule
  ]
})
export class CityModule { }
