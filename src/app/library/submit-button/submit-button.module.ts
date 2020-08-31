import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SubmitButtonComponent } from './submit-button/submit-button.component';

@NgModule({
  declarations: [
    SubmitButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    SubmitButtonComponent
  ]
})
export class SubmitButtonModule { }
