import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { Subscription } from 'rxjs';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Country } from '../country.model';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  countrySub: Subscription = new Subscription();
  borderCountriesSub: Subscription = new Subscription();
  paramSub: Subscription = new Subscription();
  isLoading: boolean = true;
  error = {
    isError: false,
    errorMsg: ''
  };
  country!: Country;
  borderCountries: any;
  code: string = '';
  backIcon = faArrowLeft;

  constructor(private countryService: CountryService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit()  {
    this.getCountryCodeFromUrl();
  }

  navigateBack(): void {
    this.location.back();
  }

  getCountryCodeFromUrl() {
    this.paramSub = this.route.paramMap.subscribe(
      paramMap => {
        this.isLoading = true;
        this.code = String(paramMap.get('code'));
        this.getCountry(this.code);
      }
    );
  }

  getCountry(code: string) {
    this.countrySub = this.countryService.fetchCountryByCode(code).subscribe(
      res => {
        this.country = res;
        this.country.borders.length >= 1 ? this.getBorderCountries(this.country.borders) : null;
        this.isLoading = false;
      },
      err => this.handleErrorDisplay(err)
    );
  }

  getBorderCountries(codes: [string]) {
    let codesString = codes.join(';');
    this.borderCountriesSub = this.countryService.fetchCountriesByCode(codesString).subscribe(
      res => this.borderCountries = res,
      err => console.log(err)
    );
  }

  handleErrorDisplay(err: HttpErrorResponse) {
    err.error.status === 400 ? this.error.errorMsg = 'Sorry, i can`t find a country with that country code.' : this.error.errorMsg = 'Sorry, something went wrong';
    this.isLoading = false;
    this.error.isError = true;
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
    this.countrySub.unsubscribe();
  }

}
