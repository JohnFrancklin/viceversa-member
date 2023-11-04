import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss'],
})
export class SwitchThemeComponent  implements OnInit {
  
  private prefersDark = JSON.parse(localStorage.getItem('darkMode') || '');
  private _darkMode: boolean;

  constructor(private sharedService: SharedService) {
    this._darkMode = this.prefersDark;
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
    this.applyMode()
  }

  set darkMode(mode: boolean) {
    this._darkMode = mode;
    this.applyMode()
  }

  get darkMode(): boolean {
    return this._darkMode;
  }
  // dark mode code end ---------------

}
