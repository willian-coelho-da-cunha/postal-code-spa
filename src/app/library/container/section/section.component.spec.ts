import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Components.*/
import { SectionComponent } from './section.component';

describe('Section component ... ', () => {

  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            SectionComponent
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
      fixture = TestBed.createComponent(SectionComponent);
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
