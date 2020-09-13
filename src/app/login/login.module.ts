import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**@description Routes.*/
import { LoginRoutingModule } from './login-routing.module';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Library.*/
import { ButtonModule } from '../library/button/button.module';
import { ContainerModule } from '../library/container/container.module';
import { EmailFormFieldModule } from '../library/email-form-field/email-form-field.module';
import { PasswordFormFieldModule } from '../library/password-form-field/password-form-field.module';

/**@description Components.*/
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FlexLayoutModule,
    ButtonModule,
    ContainerModule,
    EmailFormFieldModule,
    PasswordFormFieldModule
  ]
})
export class LoginModule { }
