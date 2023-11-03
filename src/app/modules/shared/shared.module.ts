import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPostComponent } from 'src/app/components/event-post/event-post.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchThemeComponent } from 'src/app/pages/profile/components/switch-theme/switch-theme.component';
import { EventFilterComponent } from 'src/app/pages/home/components/event-filter/event-filter.component';


@NgModule({
  declarations: [
    EventPostComponent,
    SwitchThemeComponent,
    EventFilterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EventPostComponent,
    SwitchThemeComponent,
    EventFilterComponent
  ]
})
export class SharedModule { }
