import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginService } from './login.service';

describe('Login service ... ', () => {

  let service: LoginService;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          imports: [
            HttpClientTestingModule
          ]
        });
        service = TestBed.inject(LoginService);
      }
    )
  );

  it('should be created.',
    () => {
      expect(service).toBeTruthy();
    }
  );
});
