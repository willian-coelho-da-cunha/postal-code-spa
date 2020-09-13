import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/**@description Components.*/
import { TableComponent } from './table.component';

describe('Table component ... ', () => {

  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            TableComponent
          ]
        })
        .compileComponents();
      }
    )
  );

  beforeEach(
    () => {
      fixture = TestBed.createComponent(TableComponent);
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
