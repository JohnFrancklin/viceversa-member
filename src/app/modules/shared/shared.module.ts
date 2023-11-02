import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPostComponent } from 'src/app/components/event-post/event-post.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EventPostComponent
  ]
})
export class SharedModule { }
