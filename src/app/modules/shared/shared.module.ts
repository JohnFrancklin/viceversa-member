import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPostComponent } from 'src/app/components/event-post/event-post.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchThemeComponent } from 'src/app/pages/profile/components/switch-theme/switch-theme.component';
import { EventFilterComponent } from 'src/app/pages/home/components/event-filter/event-filter.component';
import { TranslateModule } from '@ngx-translate/core';
import { SwitchLangComponent } from 'src/app/components/switch-lang/switch-lang.component';


@NgModule({
  declarations: [
    EventPostComponent,
    SwitchThemeComponent,
    EventFilterComponent,
    SwitchLangComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    EventPostComponent,
    SwitchThemeComponent,
    EventFilterComponent,
    SwitchLangComponent
  ]
})
export class SharedModule { }
