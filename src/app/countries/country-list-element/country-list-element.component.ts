import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list-element',
  templateUrl: './country-list-element.component.html',
  styleUrls: ['./country-list-element.component.scss']
})
export class CountryListElementComponent implements OnInit {
  @Input() country: any;

  constructor() { }

  ngOnInit(): void {
  }

}
