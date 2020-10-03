import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

/**@description Routes.*/
import { AppRoutingModule } from './app-routing.module';

/**@description Resources.*/
import { NgxMaskModule } from 'ngx-mask';

/**@description Components.*/
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    { provide: ANIMATION_MODULE_TYPE, useValue: 'BrowserAnimations' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
