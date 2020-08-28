import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMaskModule } from 'ngx-mask';

import { CepFormFieldComponent } from './cep-form-field/cep-form-field.component';

@NgModule({
  declarations: [
    CepFormFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgxMaskModule.forChild()
  ]
})
export class CepFormFieldModule { }
