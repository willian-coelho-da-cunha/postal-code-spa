import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { CommonModule } from '@angular/common';

/**@description Angular material.*/
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Components.*/
import { CancelButtonComponent } from './cancel-button.component';

describe('Cancel button component ... ', () => {

  const WARN_BACKGROUND_COLOR = 'rgb(244, 67, 54)';

  const ACCENT_BACKGROUND_COLOR = 'rgb(255, 64, 129)';

  const PRIMARY_BACKGROUND_COLOR = 'rgb(63, 81, 181)';

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            CancelButtonComponent
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
      const fixture: ComponentFixture<CancelButtonComponent> = TestBed.createComponent(CancelButtonComponent);
      const component = fixture.componentInstance;
      expect(component).toBeTruthy();
      fixture.nativeElement.remove();
      fixture.destroy();
    }
  );

  it('should has label "Salvar".',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<CancelButtonComponent> = TestBed.createComponent(CancelButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;

      fixture.componentInstance.ipLabel = 'Salvar';
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      button.getText().then(response => {
        expect(response).toEqual('Salvar');
        done();
      });
    }
  );

  it('should be disabled.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<CancelButtonComponent> = TestBed.createComponent(CancelButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;

      fixture.componentInstance.ipDisabled = true;
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      button.isDisabled().then(response => {
        expect(response).toBeTrue();
        done();
      });
    }
  );

  it('should has warn background-color.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<CancelButtonComponent> = TestBed.createComponent(CancelButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;

      fixture.componentInstance.ipColor = 'warn';
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      (await button.host()).getCssValue('background-color').then(response => {
        expect(response).toEqual(WARN_BACKGROUND_COLOR);
        done();
      });
    }
  );

  it('should has accent background-color.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<CancelButtonComponent> = TestBed.createComponent(CancelButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;

      fixture.componentInstance.ipColor = 'accent';
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      (await button.host()).getCssValue('background-color').then(response => {
        expect(response).toEqual(ACCENT_BACKGROUND_COLOR);
        done();
      });
    }
  );

  it('should has primary background-color.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<CancelButtonComponent> = TestBed.createComponent(CancelButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;

      fixture.componentInstance.ipColor = 'primary';
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      (await button.host()).getCssValue('background-color').then(response => {
        expect(response).toEqual(PRIMARY_BACKGROUND_COLOR);
        done();
      });
    }
  );

  it('should emit an event when clicked on it.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<CancelButtonComponent> = TestBed.createComponent(CancelButtonComponent);
      let button: MatButtonHarness;
      let loader: HarnessLoader;

      fixture.componentInstance.opClick.pipe(take(1)).subscribe(response => {
        expect(response).toBeUndefined();
        done();
      });
      loader = TestbedHarnessEnvironment.loader(fixture);
      fixture.detectChanges();

      button = await loader.getHarness(MatButtonHarness);
      button.click();
    }
  );
});
