import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-post',
  templateUrl: './event-post.component.html',
  styleUrls: ['./event-post.component.scss'],
})
export class EventPostComponent  implements OnInit {

  @Input() event: any; //change any to interface later

  constructor() { }

  ngOnInit() {}

}
