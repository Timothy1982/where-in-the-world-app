import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { CountryListElementComponent } from './countries/country-list-element/country-list-element.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { ErrorMsgComponent } from './common/error-msg/error-msg.component';
import { LoadingComponent } from './common/loading/loading.component';
import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './theme/light.theme';
import { darkTheme } from './theme/dark.theme';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    CountryListElementComponent,
    CountryListComponent,
    CountryDetailsComponent,
    ErrorMsgComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
