import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

// dark mode code start ---------------
private prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
private _darkMode: boolean;
// dark mode code end ---------------

  constructor(private sharedService: SharedService) {
      // dark mode code start ---------------
      this._darkMode = this.prefersDark.matches;
      if (localStorage.getItem('darkMode')) this.darkMode = JSON.parse(localStorage.getItem('darkMode') || '');
      else {
        this.darkMode = this.prefersDark.matches;
        localStorage.setItem("darkMode", JSON.stringify(this.prefersDark.matches));
      }
      this.sharedService._darkMode$.next(this.darkMode);
      // dark mode code end ---------------
  }

  ngOnInit() {
    this.applyMode();
  }

    // dark mode code start ---------------
  private applyMode() {
    document.body.classList.toggle('dark', this._darkMode);
    document.body.classList.toggle('light', !this._darkMode);
  }

  toggleDarkMode() {
    this._darkMode = !this._darkMode;
    localStorage.setItem("darkMode", JSON.stringify(this._darkMode));
    this.sharedService._darkMode$.next(this._darkMode);
    this.applyMode();
  }

  set darkMode(mode: boolean) {
    this._darkMode = mode;
    this.applyMode();
  }

  get darkMode(): boolean {
    return this._darkMode;
  }
  // dark mode code end ---------------

}
