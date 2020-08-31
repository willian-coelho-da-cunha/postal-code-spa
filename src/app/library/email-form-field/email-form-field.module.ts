import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FlexLayoutModule } from '@angular/flex-layout';

import { EmailFormFieldComponent } from './email-form-field/email-form-field.component';

@NgModule({
  declarations: [
    EmailFormFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    EmailFormFieldComponent
  ]
})
export class EmailFormFieldModule { }
