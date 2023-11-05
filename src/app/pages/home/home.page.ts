import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventFilterComponent } from './components/event-filter/event-filter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  events = [
    {
      id: 1,
      image: "event1.jpg"
    },
    {
      id: 2,
      image: "event2.jpg"
    },
    {
      id: 3,
      image: "event3.jpg"
    },
    {
      id: 4,
      image: "event4.jpg"
    },
    {
      id: 5,
      image: "event5.png"
    },
    {
      id: 5,
      image: "event6.jpg"
    }

  ]

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: EventFilterComponent,
      breakpoints: [0, 0.5, 0.9, 1],
      initialBreakpoint: 0.5
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      
    }
  }

}
