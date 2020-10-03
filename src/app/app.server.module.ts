import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

/**@description Modules.*/
import { AppModule } from './app.module';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

/**@description Components.*/
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FlexLayoutServerModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppServerModule { }
