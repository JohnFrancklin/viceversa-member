import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-post',
  templateUrl: './event-post.component.html',
  styleUrls: ['./event-post.component.scss'],
})
export class EventPostComponent  implements OnInit {


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

  constructor() { }

  ngOnInit() {}

}
