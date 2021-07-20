import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

/**@description Services.*/
import { LoginService } from './login.service';

describe('Login service ... ', () => {

  let service: LoginService;

  beforeEach(
    waitForAsync(
      () => {
        TestBed.configureTestingModule({
          imports: [
            RouterTestingModule,
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
