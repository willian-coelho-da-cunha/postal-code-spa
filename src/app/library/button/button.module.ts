import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**@description Angular material.*/
import { MatButtonModule } from '@angular/material/button';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Components.*/
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
