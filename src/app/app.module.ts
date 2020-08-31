import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
