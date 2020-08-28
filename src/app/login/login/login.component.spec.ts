import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';

import { SubmitButtonModule } from '../../library/submit-button/submit-button.module';
import { EmailFormFieldModule } from '../../library/email-form-field/email-form-field.module';
import { PasswordFormFieldModule } from '../../library/password-form-field/password-form-field.module';

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
            SubmitButtonModule,
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
