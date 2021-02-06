import { Component, OnInit } from '@angular/core';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from 'src/app/theme/symbols';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeTheme: string = '';
  icons = {
    moon: faMoon,
    sun: faSun
  }

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.checkActiveTheme();
  }

  toggleTheme() {
    this.checkActiveTheme();
    if (this.activeTheme === 'light') {
      this.themeService.setTheme('dark');
      this.activeTheme = 'dark';
    } else {
      this.themeService.setTheme('light');
      this.activeTheme = 'light';
    }
  }

  checkActiveTheme() {
    this.activeTheme = this.themeService.getActiveTheme().name;
  }
}
