import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**@description Angular material testing.*/
import { HarnessLoader, TestElement } from '@angular/cdk/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatSelectHarness } from '@angular/material/select/testing';
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
    async(
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
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipLabel = 'Inform an Email';
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);

      expect(await cepFormField.hasLabel()).toBeTrue();
      done();
    }
  );

  it('should has a label as "Inform an Email"',
    async (done:DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipLabel = 'Inform an Email';
      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);

      expect(await cepFormField.getLabel()).toEqual('Inform an Email');
      done();
    }
  );

  it('should has outline appearance.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let cepFormField: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);

      expect(await cepFormField.getAppearance()).toEqual('outline');
      done();
    }
  );

  it('should be enabled by default.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let cepFormField: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);

      expect(await cepFormField.isDisabled()).toBeFalse();
      done();
    }
  );

  it('should be not required by default.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let control: MatInputHarness | MatSelectHarness | null;
      let cepFormField: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);
      control = await cepFormField.getControl();

      expect(control).not.toBeNull();
      expect(await control?.isRequired()).toBeFalse();
      done();
    }
  );

  it('should be not required when input property ipRequired is equal false.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let control: MatInputHarness | MatSelectHarness | null;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = false;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);
      control = await cepFormField.getControl();

      expect(control).not.toBeNull();
      expect(await control?.isRequired()).toBeFalse();
      done();
    }
  );

  it('should be required when input property ipRequired is equal true.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let loader: HarnessLoader;
      let control: MatInputHarness | MatSelectHarness | null;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);
      control = await cepFormField.getControl();

      expect(control).not.toBeNull();
      expect(await control?.isRequired()).toBeTrue();
      done();
    }
  );


  it('should show "You must enter a value!" when form field is required and the input field is focused and immediately lost the focus.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let host: TestElement | undefined;
      let loader: HarnessLoader;
      let control: MatInputHarness | MatSelectHarness | null;
      let textErrors: Array<string>;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);

      control = await cepFormField.getControl();
      expect(control).not.toBeNull();

      host = await control?.host();
      expect(host).not.toBeUndefined();

      await host?.focus();
      await host?.blur();

      textErrors = await cepFormField.getTextErrors();
      expect(textErrors.length).toBeGreaterThan(0);
      expect(textErrors.shift()).toEqual('You must enter a value!');
      expect(textErrors.length).toEqual(0);
      done();
    }
  );

  it('should show "You must enter a valid email!" when form field is not filled with any valid email.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let host: TestElement | undefined;
      let loader: HarnessLoader;
      let control: MatInputHarness | MatSelectHarness | null;
      let textErrors: Array<string>;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);
      control = await cepFormField.getControl();
      host = await control?.host();

      await host?.sendKeys('aa');
      await host?.blur();
      textErrors = await cepFormField.getTextErrors();
      expect(textErrors.length).toBeGreaterThan(0);
      expect(textErrors.shift()).toEqual('You must enter a valid email!');
      expect(textErrors.length).toEqual(0);
      done();
    }
  );

  it('should show no errors when form field is filled with a valid email.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<EmailFormFieldComponent> = TestBed.createComponent(EmailFormFieldComponent);
      let host: TestElement | undefined;
      let loader: HarnessLoader;
      let control: MatInputHarness | MatSelectHarness | null;
      let textErrors: Array<string>;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);
      control = await cepFormField.getControl();
      host = await control?.host();

      await host?.focus();
      await host?.sendKeys('someone@gmail.com');
      await host?.blur();
      textErrors = await cepFormField.getTextErrors();
      expect(textErrors.length).toBe(0);
      done();
    }
  );
});
