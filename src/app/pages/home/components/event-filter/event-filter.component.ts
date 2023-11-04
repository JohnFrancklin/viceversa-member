import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss'],
})
export class EventFilterComponent  implements OnInit {
  /*************Category****************/ 
  categories = [
    {
      id: 1,
      name: "Festivals",
    },
    {
      id: 2,
      name: "Spectacles",
    },
    {
      id: 3,
      name: "Conférences",
    },
    {
      id: 4,
      name: "Soirées",
    },
    {
      id: 5,
      name: "Festivals de nourriture",
    },
  ];
  /**************************end category********************************************/ 

  /********************************Date**************************************/ 
  dates = [
    {
      id: 1,
      name:"All date"
    }, 
    {
      id: 2,
      name:"This week"
    }, 
    {
      id: 3,
      name:"This weekend"
    }, 
    {
      id: 4,
      name:"November"
    },
    {
      id: 5,
      name:"December"
    }
  ]
/**************************end date****************************************/ 
/*****************************Venue**********************************************/ 
  venues = [
    {
      id: 1,
      name: "Carambol",
    },
    {
      id: 2,
      name: "Luxa",
    },
    {
      id: 3,
      name: "Sofitel",
    },
    {
      id: 4,
      name: "YoungViosion",
    },
    {
      id: 5,
      name: "Festivals",
    },
    {
      id: 6,
      name: "N'import qui",
    },
  ];
/*********************************end venue**********************************************/ 

/********************************location*****************************************************/ 
  locations = [
    {
      id: 1,
      name: "Nord",
    },
    {
      id: 2,
      name: "Sud",
    },
    {
      id: 3,
      name: "Centre",
    },
    {
      id: 4,
      name: "Est",
    },
    {
      id: 5,
      name: "Ouest",
    },
    {
      id: 6,
      name: "Partout",
    },
  ];
/******************************end location*******************************************/ 

selectedCategory = "";
selectedDate = "";
selectedVenue = "";
selectedLocation = "";

  constructor() { }

  ngOnInit() {}


  result() {
    let object = {
      selectedCategory: this.selectedCategory,
      selectedDate: this.selectedDate,
      selectedVenue: this.selectedVenue,
      selectedLocation: this.selectedLocation
    }; 
    console.log("result", object);
  }

}
