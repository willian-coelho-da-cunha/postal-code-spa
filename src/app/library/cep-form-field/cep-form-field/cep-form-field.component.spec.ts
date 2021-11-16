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
import { NgxMaskModule } from 'ngx-mask';
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Components.*/
import { CepFormFieldComponent } from './cep-form-field.component';

describe('Cep form field component ... ', () => {

  beforeEach(
    waitForAsync(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            CepFormFieldComponent
          ],
          imports: [
            CommonModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            MatInputModule,
            MatFormFieldModule,
            NgxMaskModule.forRoot(),
            FlexLayoutModule
          ]
        })
        .compileComponents();
      }
    )
  );

  it('should be created.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);

      fixture.detectChanges();
      await fixture.whenStable();

      expect(fixture.componentInstance).toBeTruthy();
    }
  );

  it('should has a label.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipLabel = 'Inform a CEP';
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);

      expect(await cepFormField.hasLabel()).toBeTrue();
    }
  );

  it('should has a label as "Inform a CEP"',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipLabel = 'Inform a CEP';
      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);

      expect(await cepFormField.getLabel()).toEqual('Inform a CEP');
    }
  );

  it('should has outline appearance.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepFormField: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);

      expect(await cepFormField.getAppearance()).toEqual('outline');
    }
  );

  it('should be enabled by default.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepFormField: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);

      expect(await cepFormField.isDisabled()).toBeFalse();
    }
  );

  it('should be not required by default.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepInput: MatInputHarness;

      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepInput = await loader.getHarness(MatInputHarness);

      expect(cepInput).not.toBeNull();
      expect(await cepInput.isRequired()).toBeFalse();
    }
  );

  it('should be not required when input property ipRequired is equal false.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepInput: MatInputHarness;

      fixture.componentInstance.ipRequired = false;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepInput = await loader.getHarness(MatInputHarness);

      expect(cepInput).not.toBeNull();
      expect(await cepInput.isRequired()).toBeFalse();
    }
  );

  it('should be required when input property ipRequired is equal true.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepInput: MatInputHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepInput = await loader.getHarness(MatInputHarness);

      expect(cepInput).not.toBeNull();
      expect(await cepInput.isRequired()).toBeTrue();
    }
  );

  it('should show "You must enter a value!" when form field is required and the input field is focused and immediately lost the focus.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepInput: MatInputHarness;
      let textErrors: Array<string>;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);
      cepInput = await loader.getHarness(MatInputHarness);

      expect(cepFormField).not.toBeNull();
      expect(cepInput).not.toBeNull();

      await cepInput?.focus();
      await cepInput?.blur();

      textErrors = await cepFormField.getTextErrors();
      expect(textErrors.length).toBeGreaterThan(0);
      expect(textErrors.shift()).toEqual('You must enter a value!');
      expect(textErrors.length).toEqual(0);
    }
  );

  it('should show "Field value must fill the mask!" when form field is not filled entirely.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepInput: MatInputHarness;
      let textErrors: Array<string>;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);
      cepInput = await loader.getHarness(MatInputHarness);

      await cepInput?.setValue('012');
      await cepInput?.blur();
      textErrors = await cepFormField.getTextErrors();
      expect(textErrors.length).toBeGreaterThan(0);
      expect(textErrors.shift()).toEqual('Field value must fill the mask!');
      expect(textErrors.length).toEqual(0);
    }
  );

  it('should show "You must enter a valid cep! (10000-000 / 99999-999)!" when form field is filled with any repeated alternated number.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepInput: MatInputHarness;
      let textErrors: Array<string>;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);
      cepInput = await loader.getHarness(MatInputHarness);

      await cepInput?.setValue('05525230');
      await cepInput?.blur();
      textErrors = await cepFormField.getTextErrors();
      expect(textErrors.length).toBeGreaterThan(0);
      expect(textErrors.shift()).toEqual('You must enter a valid cep! (10000-000 / 99999-999)!');
      expect(textErrors.length).toEqual(0);
    }
  );

  it('should show no errors when form field is filled with a valid number.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<CepFormFieldComponent> = TestBed.createComponent(CepFormFieldComponent);
      let loader: HarnessLoader;
      let cepInput: MatInputHarness;
      let textErrors: Array<string>;
      let cepFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      cepFormField = await loader.getHarness(MatFormFieldHarness);
      cepInput = await loader.getHarness(MatInputHarness);

      await cepInput?.focus();
      await cepInput?.setValue('52344563');
      await cepInput?.blur();
      textErrors = await cepFormField.getTextErrors();
      expect(textErrors.length).toBe(0);
    }
  );
});
