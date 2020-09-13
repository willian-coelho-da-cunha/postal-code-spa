import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Components.*/
import { MainComponent } from './main/main.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    MainComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    MainComponent,
    SectionComponent
  ]
})
export class ContainerModule { }
