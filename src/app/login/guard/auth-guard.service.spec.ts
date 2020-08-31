import { TestBed, async } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';

describe('Auth guard service ... ', () => {

  let service: AuthGuardService;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({});
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
