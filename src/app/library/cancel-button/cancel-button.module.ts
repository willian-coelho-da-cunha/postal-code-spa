import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CancelButtonComponent } from './cancel-button/cancel-button.component';

@NgModule({
  declarations: [
    CancelButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    CancelButtonComponent
  ]
})
export class CancelButtonModule { }
