import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Library.*/
import { ButtonModule } from '../../library/button/button.module';
import { EmailFormFieldModule } from '../../library/email-form-field/email-form-field.module';
import { PasswordFormFieldModule } from '../../library/password-form-field/password-form-field.module';

/**@description Components.*/
import { LoginComponent } from './login.component';

describe('Login component ... ', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            LoginComponent
          ],
          imports: [
            CommonModule,
            RouterTestingModule.withRoutes([]),
            HttpClientTestingModule,
            BrowserAnimationsModule,
            FlexLayoutModule,
            ButtonModule,
            EmailFormFieldModule,
            PasswordFormFieldModule
          ]
        })
        .compileComponents();
      }
    )
  );

  beforeEach(
    () => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
  );

  afterEach(
    () => {
      fixture.nativeElement.remove();
      fixture.destroy();
    }
  );

  it('should be created.',
    () => {
      expect(component).toBeTruthy();
    }
  );
});
