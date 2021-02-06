import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() filterByRegion = new EventEmitter();
  @Output() filterByTerm = new EventEmitter();
  waitForTermSearch: any;
  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ]
  
  searchForm = new FormGroup({
    searchTerm: new FormControl(),
    region: new FormControl(this.regions)
  })

  constructor() {
  }

  ngOnInit(): void {
    let lsFilter = localStorage.getItem('filterRegion');
    let lsTerm = localStorage.getItem('filterTerm');
    if (lsFilter) {
      this.searchForm.controls['region'].setValue(lsFilter);
      this.filterByRegion.emit(lsFilter);
    }
    if (lsTerm) {
      this.searchForm.controls['searchTerm'].setValue(lsTerm);
      setTimeout(() => this.filterByTerm.emit(lsTerm), 500);
    }
  }

  filterRegions() {
    this.filterByRegion.emit(this.searchForm.value.region);
    setTimeout(() => this.filterByTerm.emit(this.searchForm.controls['searchTerm'].value), 500);
    localStorage.setItem('filterRegion', this.searchForm.value.region);
  }

  filterCountries() {
    clearTimeout(this.waitForTermSearch);
    this.waitForTermSearch = setTimeout(() => {
      this.filterByTerm.emit(this.searchForm.controls['searchTerm'].value);
      localStorage.setItem('filterTerm', this.searchForm.controls['searchTerm'].value)
    }, 500);
  }

}
