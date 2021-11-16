import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonModule } from '@angular/common';

/**@description Angular material testing.*/
import { HarnessLoader, TestElement } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

/**@description Angular material.*/
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Components.*/
import { ButtonComponent } from './button.component';

describe('Cancel button component ... ', () => {

  const WARN_BACKGROUND_COLOR: string = 'rgb(244, 67, 54)';

  const ACCENT_BACKGROUND_COLOR: string = 'rgb(255, 64, 129)';

  const PRIMARY_BACKGROUND_COLOR: string = 'rgb(63, 81, 181)';

  beforeEach(
    waitForAsync(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            ButtonComponent
          ],
          imports: [
            CommonModule,
            MatButtonModule,
            FlexLayoutModule
          ]
        })
        .compileComponents();
      }
    )
  );

  it('should be created.',
    () => {
      const fixture: ComponentFixture<ButtonComponent> = TestBed.createComponent(ButtonComponent);
      const component: ButtonComponent = fixture.componentInstance;
      expect(component).toBeTruthy();
    }
  );

  it('should has label "Salvar".',
    async (): Promise<void> => {
      const fixture: ComponentFixture<ButtonComponent> = TestBed.createComponent(ButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;

      fixture.componentInstance.ipLabel = 'Salvar';
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      expect(await button.getText()).toEqual('Salvar');
    }
  );

  it('should be disabled.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<ButtonComponent> = TestBed.createComponent(ButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;

      fixture.componentInstance.ipDisabled = true;
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      expect(await button.isDisabled()).toBeTrue();
    }
  );

  it('should has warn background-color.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<ButtonComponent> = TestBed.createComponent(ButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;
      let buttonHost: TestElement;

      fixture.componentInstance.ipColor = 'warn';
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      buttonHost = await button.host();
      expect(await buttonHost.getCssValue('background-color')).toEqual(WARN_BACKGROUND_COLOR);
    }
  );

  it('should has accent background-color.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<ButtonComponent> = TestBed.createComponent(ButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;
      let buttonHost: TestElement;

      fixture.componentInstance.ipColor = 'accent';
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      buttonHost = await button.host();
      expect(await buttonHost.getCssValue('background-color')).toEqual(ACCENT_BACKGROUND_COLOR);
    }
  );

  it('should has primary background-color.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<ButtonComponent> = TestBed.createComponent(ButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;
      let buttonHost: TestElement;

      fixture.componentInstance.ipColor = 'primary';
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      buttonHost = await button.host();
      expect(await buttonHost.getCssValue('background-color')).toEqual(PRIMARY_BACKGROUND_COLOR);
    }
  );

  it('should emit an event when clicked on it.',
    async (): Promise<void> => {
      const fixture: ComponentFixture<ButtonComponent> = TestBed.createComponent(ButtonComponent);
      const opClickSpy: jasmine.Spy<any> = spyOn(fixture.componentInstance.opClick, 'emit');
      let button: MatButtonHarness;
      let loader: HarnessLoader;

      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      await button.click();
      expect(opClickSpy).toHaveBeenCalled();
    }
  );
});
