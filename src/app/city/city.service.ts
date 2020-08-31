import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { City } from './model/city.model';
import { CityList } from './model/city-list.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private readonly endpoint = 'http://localhost:3000/cities';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCities(cityList: CityList): Observable<any> {
    return this.httpClient.get(
      `${this.endpoint}?_sort=${cityList.sort.join(',')}&_order=${cityList.order.join(',')}&_page=${cityList.page}&_limit=${cityList.limit}`
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
