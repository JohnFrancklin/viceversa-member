import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  image: string;
  eventId: number;
  constructor(public activatedRoute: ActivatedRoute) {
    this.eventId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
