import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public login(): Observable<Object> {
    return this.httpClient.post(``, { });
  }

  public logout(): Observable<Object> {
    return this.httpClient.post(``, { });
  }
}
