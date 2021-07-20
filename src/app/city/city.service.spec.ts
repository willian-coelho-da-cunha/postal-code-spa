import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

/**@description Services.*/
import { CityService } from './city.service';

describe('City service ... ', () => {

  let service: CityService;

  beforeEach(
    waitForAsync(
      () => {
        TestBed.configureTestingModule({
          imports: [
            HttpClientTestingModule
          ]
        });
        service = TestBed.inject(CityService);
      }
    )
  );

  it('should be created.',
    () => {
      expect(service).toBeTruthy();
    }
  );
});
