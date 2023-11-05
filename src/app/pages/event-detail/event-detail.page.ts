import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  image: string;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe((params) => {
      this.image = params['image'];
    });
  
  }

  ngOnInit() {
  }

}
