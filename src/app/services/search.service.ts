import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private filter = new Subject<string>();

  constructor() { }

  setFilter(region: string) {
    this.filter.next(region);
  }

  removeFilter() {
    this.filter.next();
  }

  getFilter(): Observable<string> {
    return this.filter.asObservable();
  }
}
