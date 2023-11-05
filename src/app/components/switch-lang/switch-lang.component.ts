import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-switch-lang',
  templateUrl: './switch-lang.component.html',
  styleUrls: ['./switch-lang.component.scss'],
})
export class SwitchLangComponent  implements OnInit {

  language = "";

  constructor(public translateConfigService: TranslateConfigService) { }

  ngOnInit() {}

  changeLanguage(lang: string) {
    this.language = lang;
    this.translateConfigService.setLanguage(lang);
  }

}
