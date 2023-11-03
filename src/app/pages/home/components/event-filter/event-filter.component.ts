import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss'],
})
export class EventFilterComponent  implements OnInit {
  categories = [
    {
      id: 1,
      name: 'Festivals',
    },
    {
      id: 2,
      name: 'Spectacles',
    },
    {
      id: 3,
      name: 'Conférences',
    },
    {
      id: 4,
      name: 'Soirées',
    },
    {
      id: 5,
      name: 'Festivals de nourriture',
    },
  ];

  venues = [
    {
      id: 1,
      name: 'Carambol',
    },
    {
      id: 2,
      name: 'Luxa',
    },
    {
      id: 3,
      name: 'Sofitel',
    },
    {
      id: 4,
      name: 'YoungViosion',
    },
    {
      id: 5,
      name: 'Festivals',
    },
  ];

  locations = [
    {
      id: 1,
      name: 'Nord',
    },
    {
      id: 2,
      name: 'Sud',
    },
    {
      id: 3,
      name: 'Centre',
    },
    {
      id: 4,
      name: 'Est',
    },
    {
      id: 5,
      name: 'Ouest',
    },
  ];

  constructor() { }

  ngOnInit() {}

}
