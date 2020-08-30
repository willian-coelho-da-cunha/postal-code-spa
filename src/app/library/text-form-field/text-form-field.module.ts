import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TextFormFieldComponent } from './text-form-field/text-form-field.component';

@NgModule({
  declarations: [
    TextFormFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    TextFormFieldComponent
  ]
})
export class TextFormFieldModule { }
