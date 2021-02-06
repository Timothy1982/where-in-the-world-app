import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Country } from '../countries/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  fetchAllCountries() {
    return this.http.get<Country[]>(this.apiUrl + 'all');
  }

  fetchCountryByCode(code: string) {
    return this.http.get<Country>(this.apiUrl + 'alpha/' + code);
  }

  fetchCountriesByCode(codes: string) {
    return this.http.get<Country[]>(this.apiUrl + 'alpha', {
      params: {
        codes: codes
      }
    });
  }

  fetchCountriesByRegion(region: string) {
    return this.http.get<Country[]>(this.apiUrl + 'region/' + region);
  }
}
