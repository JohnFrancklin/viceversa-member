import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventFilterComponent } from './components/event-filter/event-filter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: EventFilterComponent,
      breakpoints: [0, 0.5, 0.9, 1],
      initialBreakpoint: 0.9
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      
    }
  }

}
