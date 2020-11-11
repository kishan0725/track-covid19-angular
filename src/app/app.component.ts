import { Component } from '@angular/core';
import { SharedCountryService } from 'src/app/services/shared-country.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public data;
  title = 'covid-tracker';
  public darkMode = false;
  constructor(private _sharedService: SharedCountryService) {
    this._sharedService.dataSource.subscribe((data) => {
      this.data = data;
    });
  }

  toggleDarkMode = () => {
    this.darkMode = !this.darkMode;
  }
}
