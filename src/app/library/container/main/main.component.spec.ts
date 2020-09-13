import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Components.*/
import { MainComponent } from './main.component';

describe('Main component ... ', () => {

  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            MainComponent
          ],
          imports: [
            FlexLayoutModule
          ]
        })
        .compileComponents();
      }
    )
  );

  beforeEach(
    () => {
      fixture = TestBed.createComponent(MainComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
  );

  it('should be created.',
    () => {
      expect(component).toBeTruthy();
    }
  );
});
