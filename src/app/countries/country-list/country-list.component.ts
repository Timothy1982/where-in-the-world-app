import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CountryService } from 'src/app/services/country.service';
import { Country } from '../country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  isLoading: boolean = true;
  countryList: Country[] = [];
  countryListDisplay: Country[] = [];

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.resetList();
    this.countryService.fetchAllCountries().subscribe(
      res => {
        this.countryList = res;
        this.countryListDisplay = res;
        this.isLoading = false;
      },
      err => console.log(err)
    );
  }

  getCountriesByRegion(region: string) {
    this.resetList();
    this.countryService.fetchCountriesByRegion(region).subscribe(
      res => {
        this.countryList = res;
        this.countryListDisplay = res;
        this.isLoading = false;
      },
      err => console.log(err)
    );
  }

  resetList() {
    this.isLoading = true;
    this.countryList = [];
  }

  showCountry(country: any) {
    this.router.navigate(['country', country.alpha3Code])
  }

  filterCountries(e: any) {
    e !== '' ? this.getCountriesByRegion(e) : this.getCountries();
  }

  filterByTerm(e: any) {
    this.countryListDisplay = this.countryList;
    let filteredList;
    if (e) {
      filteredList = this.countryListDisplay.filter((country: any) => country.name.toLowerCase().includes(e.toLowerCase()));
    } else {
      filteredList = this.countryList;
    }
    this.countryListDisplay = filteredList;
  }

}
