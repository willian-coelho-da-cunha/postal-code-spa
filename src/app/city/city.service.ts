import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**@description Models.*/
import { City } from './model/city.model';
import { TableControl } from '../library/table/model/table-control.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private readonly endpoint = 'http://localhost:3000/cities';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCities(tableControl: TableControl): Observable<any> {
    return this.httpClient.get(
      `${this.endpoint}?_sort=${tableControl.sort.join(',')}&_order=${tableControl.order.join(',')}&_page=${tableControl.page}&_limit=${tableControl.limit}`
    );
  }

  public getCity(cityId: string): Observable<City> {
    return this.httpClient.get<City>(
      `${this.endpoint}/${cityId}`
    );
  }

  public saveCity(city: City): Observable<City> {
    return this.httpClient.post<City>(
      `${this.endpoint}`, city
    );
  }

  public updateCity(city: City): Observable<City> {
    return this.httpClient.put<City>(
      `${this.endpoint}`, city
    );
  }

  public deleteCity(cityId: string): Observable<City> {
    return this.httpClient.delete<City>(
      `${this.endpoint}/${cityId}`
    );
  }
}
