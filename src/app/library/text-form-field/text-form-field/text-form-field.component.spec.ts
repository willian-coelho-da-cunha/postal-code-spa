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
import { TextFormFieldComponent } from './text-form-field.component';

describe('Text form field component ... ', () => {

  beforeEach(
    waitForAsync(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            TextFormFieldComponent
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
      const fixture: ComponentFixture<TextFormFieldComponent> = TestBed.createComponent(TextFormFieldComponent);

      fixture.detectChanges();
      await fixture.whenStable();

      expect(fixture.componentInstance).toBeTruthy();
      done();
    }
  );

  it('should has a label.',
    async (done:DoneFn) => {
      const fixture: ComponentFixture<TextFormFieldComponent> = TestBed.createComponent(TextFormFieldComponent);
      let loader: HarnessLoader;
      let textInput: MatFormFieldHarness;

      fixture.componentInstance.ipLabel = 'Inform some description';
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      textInput = await loader.getHarness(MatFormFieldHarness);

      expect(textInput).not.toBeNull();
      expect(await textInput.hasLabel()).toBeTrue();
      done();
    }
  );

  it('should has a label as "Inform your name"',
    async (done:DoneFn) => {
      const fixture: ComponentFixture<TextFormFieldComponent> = TestBed.createComponent(TextFormFieldComponent);
      let loader: HarnessLoader;
      let textInput: MatFormFieldHarness;

      fixture.componentInstance.ipLabel = 'Inform your name';
      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      textInput = await loader.getHarness(MatFormFieldHarness);

      expect(textInput).not.toBeNull();
      expect(await textInput.getLabel()).toEqual('Inform your name');
      done();
    }
  );

  it('should has outline appearance.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<TextFormFieldComponent> = TestBed.createComponent(TextFormFieldComponent);
      let loader: HarnessLoader;
      let textInput: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      textInput = await loader.getHarness(MatFormFieldHarness);

      expect(textInput).not.toBeNull();
      expect(await textInput.getAppearance()).toEqual('outline');
      done();
    }
  );

  it('should be enabled by default.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<TextFormFieldComponent> = TestBed.createComponent(TextFormFieldComponent);
      let loader: HarnessLoader;
      let textInput: MatFormFieldHarness;

      fixture.detectChanges();
      await fixture.whenStable();
      
      loader = TestbedHarnessEnvironment.loader(fixture);
      textInput = await loader.getHarness(MatFormFieldHarness);

      expect(textInput).not.toBeNull();
      expect(await textInput.isDisabled()).toBeFalse();
      done();
    }
  );

  it('should be not required by default.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<TextFormFieldComponent> = TestBed.createComponent(TextFormFieldComponent);
      let loader: HarnessLoader;
      let textInput: MatInputHarness;

      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      textInput = await loader.getHarness(MatInputHarness);

      expect(textInput).not.toBeNull();
      expect(await textInput.isRequired()).toBeFalse();
      done();
    }
  );

  it('should be not required when input property ipRequired is equal false.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<TextFormFieldComponent> = TestBed.createComponent(TextFormFieldComponent);
      let loader: HarnessLoader;
      let textInput: MatInputHarness;

      fixture.componentInstance.ipRequired = false;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      textInput = await loader.getHarness(MatInputHarness);

      expect(textInput).not.toBeNull();
      expect(await textInput.isRequired()).toBeFalse();
      done();
    }
  );

  it('should be required when input property ipRequired is equal true.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<TextFormFieldComponent> = TestBed.createComponent(TextFormFieldComponent);
      let loader: HarnessLoader;
      let textInput: MatInputHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      textInput = await loader.getHarness(MatInputHarness);

      expect(textInput).not.toBeNull();
      expect(await textInput.isRequired()).toBeTrue();
      done();
    }
  );

  it('should show "You must enter a value!" when form field is required and the input field is focused and immediately lost the focus.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<TextFormFieldComponent> = TestBed.createComponent(TextFormFieldComponent);
      let loader: HarnessLoader;
      let textInput: MatInputHarness;
      let textErrors: Array<string>;
      let textFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      textFormField = await loader.getHarness(MatFormFieldHarness);
      textInput = await loader.getHarness(MatInputHarness);

      expect(textFormField).not.toBeNull();
      expect(textInput).not.toBeNull();

      await textInput?.focus();
      await textInput?.blur();

      textErrors = await textFormField.getTextErrors();
      expect(textErrors.length).toBeGreaterThan(0);
      expect(textErrors.shift()).toEqual('You must enter a value!');
      expect(textErrors.length).toEqual(0);
      done();
    }
  );

  it('should show no errors when form field is filled with a valid value.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<TextFormFieldComponent> = TestBed.createComponent(TextFormFieldComponent);
      let loader: HarnessLoader;
      let textInput: MatInputHarness;
      let textErrors: Array<string>;
      let textFormField: MatFormFieldHarness;

      fixture.componentInstance.ipRequired = true;
      fixture.detectChanges();
      await fixture.whenStable();

      loader = TestbedHarnessEnvironment.loader(fixture);
      textFormField = await loader.getHarness(MatFormFieldHarness);
      textInput = await loader.getHarness(MatInputHarness);

      expect(textFormField).not.toBeNull();
      expect(textInput).not.toBeNull();

      await textInput.focus();
      await textInput.setValue('523563');
      await textInput.blur();
      textErrors = await textFormField.getTextErrors();
      expect(textErrors.length).toBe(0);
      done();
    }
  );
});
