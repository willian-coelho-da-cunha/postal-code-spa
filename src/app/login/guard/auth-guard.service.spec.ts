import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

/**@description Services.*/
import { AuthGuardService } from './auth-guard.service';

describe('Auth guard service ... ', () => {

  let service: AuthGuardService;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          imports: [
            HttpClientTestingModule
          ]
        });
        service = TestBed.inject(AuthGuardService);
      }
    )
  );

  it('should be created.',
    () => {
      expect(service).toBeTruthy();
    }
  );
});
