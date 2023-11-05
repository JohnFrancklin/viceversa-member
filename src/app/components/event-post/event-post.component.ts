import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-post',
  templateUrl: './event-post.component.html',
  styleUrls: ['./event-post.component.scss'],
})
export class EventPostComponent  implements OnInit {

  @Input() event: any; //change any to interface later

  constructor(private router: Router) { }

  ngOnInit() {}

  navigate(id:number){
    this.router.navigate(['/event-detail/'+id])
  }

}
