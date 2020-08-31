import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SubmitButtonModule } from '../library/submit-button/submit-button.module';
import { EmailFormFieldModule } from '../library/email-form-field/email-form-field.module';
import { PasswordFormFieldModule } from '../library/password-form-field/password-form-field.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FlexLayoutModule,
    SubmitButtonModule,
    EmailFormFieldModule,
    PasswordFormFieldModule
  ]
})
export class LoginModule { }
