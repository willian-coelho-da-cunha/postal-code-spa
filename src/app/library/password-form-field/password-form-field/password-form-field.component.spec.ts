import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**@description Angular material testing.*/
import { HarnessLoader } from '@angular/cdk/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatFormFieldHarness } from '@angular/material/form-field/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

/**@description Angular material.*/
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Components.*/
import { PasswordFormFieldComponent } from './password-form-field.component';

describe('Password form field component ... ', () => {

  beforeEach(
    waitForAsync(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            PasswordFormFieldComponent
          ],
          imports: [
            CommonModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            MatIconModule,
            MatInputModule,
            MatButtonModule,
            MatFormFieldModule,
            FlexLayoutModule
          ]
        })
        .compileComponents();
      }
    )
  );

  it('should be created.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<PasswordFormFieldComponent> = TestBed.createComponent(PasswordFormFieldComponent);

      fixture.detectChanges();
      await fixture.whenStable();

      expect(fixture.componentInstance).toBeTruthy();
      done();
    }
  );

  it('should has a label.',
    async (done:DoneFn) => {
      const fixture: ComponentFixture<PasswordFormFieldComponent> = TestBed.createComponent(PasswordFormFieldComponent);
      let loader: HarnessLoader;
      let emailFormField: MatFormFieldHarness;

      fixture.componentInstance.ipLabel = 'Inform an E-mail';
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      emailFormField = await loader.getHarness(MatFormFieldHarness);

      expect(emailFormField).not.toBeNull();
      expect(await emailFormField.hasLabel()).toBeTrue();
      done();
    }
  );

  it('should has a label as "Inform your password"',
    async (done:DoneFn) => {
      const fixture: ComponentFixture<PasswordFormFieldComponent> = TestBed.createComponent(PasswordFormFieldComponent);
      let loader: HarnessLoader;
      let emailFormField: MatFormFieldHarness;

      fixture.componentInstance.ipLabel = 'Inform your password';
      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      emailFormField = await loader.getHarness(MatFormFieldHarness);

      expect(emailFormField).not.toBeNull();
      expect(await emailFormField.getLabel()).toEqual('Inform your password');
      done();
    }
  );

  it('should has outline appearance.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<PasswordFormFieldComponent> = TestBed.createComponent(PasswordFormFieldComponent);
      let loader: HarnessLoader;
      let passwordFormField: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      passwordFormField = await loader.getHarness(MatFormFieldHarness);

      expect(passwordFormField).not.toBeNull();
      expect(await passwordFormField.getAppearance()).toEqual('outline');
      done();
    }
  );

  it('should be enabled by default.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<PasswordFormFieldComponent> = TestBed.createComponent(PasswordFormFieldComponent);
      let loader: HarnessLoader;
      let passwordFormField: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      passwordFormField = await loader.getHarness(MatFormFieldHarness);

      expect(passwordFormField).not.toBeNull();
      expect(await passwordFormField.isDisabled()).toBeFalse();
      done();
    }
  );

  it('should be not required by default.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<PasswordFormFieldComponent> = TestBed.createComponent(PasswordFormFieldComponent);
      let loader: HarnessLoader;
      let passwordInput: MatInputHarness;

      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      passwordInput = await loader.getHarness(MatInputHarness);

      expect(passwordInput).not.toBeNull();
      expect(await passwordInput.isRequired()).toBeFalse();
      done();
    }
  );

  it('should be not required when input property ipRequired is equal false.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<PasswordFormFieldComponent> = TestBed.createComponent(PasswordFormFieldComponent);
      let loader: HarnessLoader;
      let passwordInput: MatInputHarness;

      fixture.componentInstance.ipRequired = false;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      passwordInput = await loader.getHarness(MatInputHarness);

      expect(passwordInput).not.toBeNull();
      expect(await passwordInput.isRequired()).toBeFalse();
      done();
    }
  );

  it('should be required when input property ipRequired is equal true.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<PasswordFormFieldComponent> = TestBed.createComponent(PasswordFormFieldComponent);
      let loader: HarnessLoader;
      let passwordInput: MatInputHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      passwordInput = await loader.getHarness(MatInputHarness);

      expect(passwordInput).not.toBeNull();
      expect(await passwordInput.isRequired()).toBeTrue();
      done();
    }
  );

  it('should show "You must enter a value!" when form field is required and the input field is focused and immediately lost the focus.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<PasswordFormFieldComponent> = TestBed.createComponent(PasswordFormFieldComponent);
      let loader: HarnessLoader;
      let textErrors: Array<string>;
      let passwordInput: MatInputHarness;
      let passwordFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      passwordFormField = await loader.getHarness(MatFormFieldHarness);
      passwordInput = await loader.getHarness(MatInputHarness);

      expect(passwordFormField).not.toBeNull();
      expect(passwordInput).not.toBeNull();

      await passwordInput?.focus();
      await passwordInput?.blur();

      textErrors = await passwordFormField.getTextErrors();
      expect(textErrors.length).toBeGreaterThan(0);
      expect(textErrors.shift()).toEqual('You must enter a value!');
      expect(textErrors.length).toEqual(0);
      done();
    }
  );

  it('should show no errors when form field is filled with a valid password.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<PasswordFormFieldComponent> = TestBed.createComponent(PasswordFormFieldComponent);
      let loader: HarnessLoader;
      let textErrors: Array<string>;
      let passwordInput: MatInputHarness;
      let passwordFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      passwordFormField = await loader.getHarness(MatFormFieldHarness);
      passwordInput = await loader.getHarness(MatInputHarness);

      expect(passwordFormField).not.toBeNull();
      expect(passwordInput).not.toBeNull();

      await passwordInput?.focus();
      await passwordInput?.setValue('523563');
      await passwordInput?.blur();
      textErrors = await passwordFormField.getTextErrors();
      expect(textErrors.length).toBe(0);
      done();
    }
  );
});
