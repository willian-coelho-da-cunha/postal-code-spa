import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CityService } from './city.service';

describe('City service ... ', () => {

  let service: CityService;

  beforeEach(
    async(
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
