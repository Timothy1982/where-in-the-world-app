import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';

const routes: Routes = [
  { path: 'countries', component: CountryListComponent},
  { path: 'country/:code', component: CountryDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/countries' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
