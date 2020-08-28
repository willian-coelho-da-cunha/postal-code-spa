import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { CancelButtonComponent } from './cancel-button/cancel-button.component';

@NgModule({
  declarations: [
    CancelButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class CancelButtonModule { }
