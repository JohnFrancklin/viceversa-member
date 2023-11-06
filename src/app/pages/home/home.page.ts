import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { Animation } from 'src/app/animations/animation';
import { EventFilterComponent } from './components/event-filter/event-filter.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    Animation
  ],
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
      image: "event5.jpg"
    },
    {
      id: 6,
      image: "event6.jpg"
    }
  ]

  screenWidth: number;
  screenHeight: number;
  initialBreakpoint: number; // for modal filter
  lastPositionScrollTop: number = 0;
  isScrollDown: boolean = true;

  @ViewChild(IonContent) content: IonContent;

  constructor(
    private modalCtrl: ModalController, 
    public platform: Platform) {
      this.getScreenSize();
    }

  ngOnInit() {
  }


  getScreenSize() {
    this.platform.ready().then(() => {
      this.screenWidth = this.platform.width();
      this.screenHeight = this.platform.height();
      if (this.screenHeight<670) this.initialBreakpoint = 0.5;
      else if (this.screenHeight<700) this.initialBreakpoint = 0.5;
      else if (this.screenHeight<750) this.initialBreakpoint = 0.5;
      else if (this.screenHeight<800) this.initialBreakpoint = 0.45;
      else if (this.screenHeight<850) this.initialBreakpoint = 0.4;
      else this.initialBreakpoint = 0.4;
    });
  }

  scrolling(event: any) {
    if (this.lastPositionScrollTop>=event.detail.scrollTop) {
      this.isScrollDown = true;
    } else this.isScrollDown = false;
    this.lastPositionScrollTop = event.detail.scrollTop;

  }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: EventFilterComponent,
      breakpoints: [0,this.initialBreakpoint, 0.9, 1],
      initialBreakpoint: this.initialBreakpoint
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      
    }
  }

}
