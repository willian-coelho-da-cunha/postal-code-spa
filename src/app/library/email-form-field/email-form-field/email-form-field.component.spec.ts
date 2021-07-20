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
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Components.*/
import { EmailFormFieldComponent } from './email-form-field.component';

describe('Email form field component ... ', () => {

  beforeEach(
    waitForAsync(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            EmailFormFieldComponent
          ],
          imports: [
            CommonModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            MatInputModule,
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
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);

      fixture.detectChanges();
      await fixture.whenStable();

      expect(fixture.componentInstance).toBeTruthy();
      done();
    }
  );

  it('should has a label.',
    async (done:DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let emailFormField: MatFormFieldHarness;

      fixture.componentInstance.ipLabel = 'Inform an Email';
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      emailFormField = await loader.getHarness(MatFormFieldHarness);

      expect(emailFormField).not.toBeNull();
      expect(await emailFormField.hasLabel()).toBeTrue();
      done();
    }
  );

  it('should has a label as "Inform an Email"',
    async (done:DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let emailFormField: MatFormFieldHarness;

      fixture.componentInstance.ipLabel = 'Inform an Email';
      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      emailFormField = await loader.getHarness(MatFormFieldHarness);

      expect(emailFormField).not.toBeNull();
      expect(await emailFormField.getLabel()).toEqual('Inform an Email');
      done();
    }
  );

  it('should has outline appearance.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let emailFormField: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      emailFormField = await loader.getHarness(MatFormFieldHarness);

      expect(emailFormField).not.toBeNull();
      expect(await emailFormField.getAppearance()).toEqual('outline');
      done();
    }
  );

  it('should be enabled by default.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let emailFormField: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      emailFormField = await loader.getHarness(MatFormFieldHarness);

      expect(emailFormField).not.toBeNull();
      expect(await emailFormField.isDisabled()).toBeFalse();
      done();
    }
  );

  it('should be not required by default.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let emailInput: MatInputHarness;

      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      emailInput = await loader.getHarness(MatInputHarness);

      expect(emailInput).not.toBeNull();
      expect(await emailInput.isRequired()).toBeFalse();
      done();
    }
  );

  it('should be not required when input property ipRequired is equal false.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let emailInput: MatInputHarness;

      fixture.componentInstance.ipRequired = false;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      emailInput = await loader.getHarness(MatInputHarness);

      expect(emailInput).not.toBeNull();
      expect(await emailInput.isRequired()).toBeFalse();
      done();
    }
  );

  it('should be required when input property ipRequired is equal true.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let emailInput: MatInputHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      emailInput = await loader.getHarness(MatInputHarness);

      expect(emailInput).not.toBeNull();
      expect(await emailInput.isRequired()).toBeTrue();
      done();
    }
  );

  it('should show "You must enter a value!" when form field is required and the input field is focused and immediately lost the focus.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let emailInput: MatInputHarness;
      let textErrors: Array<string>;
      let emailFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      emailFormField = await loader.getHarness(MatFormFieldHarness);
      emailInput = await loader.getHarness(MatInputHarness);

      expect(emailFormField).not.toBeNull();
      expect(emailInput).not.toBeNull();

      await emailInput?.focus();
      await emailInput?.blur();

      textErrors = await emailFormField.getTextErrors();
      expect(textErrors.length).toBeGreaterThan(0);
      expect(textErrors.shift()).toEqual('You must enter a value!');
      expect(textErrors.length).toEqual(0);
      done();
    }
  );

  it('should show "You must enter a valid email!" when form field is not filled with any valid email.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let emailInput: MatInputHarness;
      let textErrors: Array<string>;
      let emailFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      emailFormField = await loader.getHarness(MatFormFieldHarness);
      emailInput = await loader.getHarness(MatInputHarness);

      expect(emailFormField).not.toBeNull();
      expect(emailInput).not.toBeNull();

      await emailInput?.setValue('aa');
      await emailInput?.blur();
      textErrors = await emailFormField.getTextErrors();
      expect(textErrors.length).toBeGreaterThan(0);
      expect(textErrors.shift()).toEqual('You must enter a valid email!');
      expect(textErrors.length).toEqual(0);
      done();
    }
  );

  it('should show no errors when form field is filled with a valid email.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let emailInput: MatInputHarness;
      let textErrors: Array<string>;
      let emailFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      emailFormField = await loader.getHarness(MatFormFieldHarness);
      emailInput = await loader.getHarness(MatInputHarness);

      expect(emailFormField).not.toBeNull();
      expect(emailInput).not.toBeNull();

      await emailInput?.focus();
      await emailInput?.setValue('someone@gmail.com');
      await emailInput?.blur();
      textErrors = await emailFormField.getTextErrors();
      expect(textErrors.length).toBe(0);
      done();
    }
  );
});
