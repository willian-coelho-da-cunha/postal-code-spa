import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly endpoint = 'http://localhost:3000/users';

  constructor(
    private httpClient: HttpClient
  ) { }

  public registerLoggedUser(user: User): void {
    if (user && user.id) {
      sessionStorage.setItem('loggedUser', window.btoa(user.id));
    } else {
      sessionStorage.removeItem('loggedUser');
    }
  }

  public getUserById(userId: string): Observable<User> {
    return this.httpClient.get<User>(
      `${this.endpoint}/${userId}`
    );
  }

  public getUserByLogin(username: string, password: string): Observable<User> {
    return this.httpClient.get<User>(
      `${this.endpoint}?username=${username}&password=${password}`
    );
  }

  public updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(
      `${this.endpoint}/${user.id}`, user
    );
  }

  public checkLogin(): Observable<boolean> {
    return new Observable(
      resolve => {
        const userEncodedId = sessionStorage.getItem('loggedUser');
        if (userEncodedId) {
          const userId = window.atob(userEncodedId);
          this.getUserById(userId)
            .pipe(take(1))
            .subscribe(
              response => {
                if (response) {
                  resolve.next(response.login);
                } else {
                  resolve.next(false);
                }
              }
            )
          ;
        } else {
          resolve.next(false);
        }
      }
    );
  }

  public login(username: string, password: string): Observable<User | null> {
    return new Observable(
      resolve => {
        this.getUserByLogin(username, password)
          .pipe(take(1))
          .subscribe(
            response => {
              if (Array.isArray(response) && response.length === 1) {
                response[0].login = true;
                this.updateUser(response[0])
                  .pipe(take(1))
                  .subscribe(
                    entity => {
                      this.registerLoggedUser(entity);
                      resolve.next(entity);
                    }
                  )
                ;
              } else {
                resolve.next(null);
              }
            }
          )
        ;
      }
    );
  }

  public logout(): Observable<User | null> {
    return new Observable(
      resolve => {
        const userEncodedId = sessionStorage.getItem('loggedUser');
        if (userEncodedId) {
          const userId = window.atob(userEncodedId);
          this.getUserById(userId)
            .pipe(take(1))
            .subscribe(
              response => {
                if (response) {
                  response.login = false;
                  this.updateUser(response)
                    .pipe(take(1))
                    .subscribe(
                      entity => {
                        sessionStorage.removeItem('loggedUser');
                        resolve.next(entity);
                      }
                    )
                  ;
                } else {
                  resolve.next(null);
                }
              }
            )
          ;
        } else {
          resolve.next(null);
        }
      }
    );
  }
}
