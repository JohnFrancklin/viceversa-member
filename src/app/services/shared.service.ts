import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  _darkMode = false;

  public _darkMode$ = new BehaviorSubject(this._darkMode);

  constructor() { }
}
