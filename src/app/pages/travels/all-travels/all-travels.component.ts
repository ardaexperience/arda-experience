import { TravelService } from './../../../shared/services/travel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-travels',
  templateUrl: './all-travels.component.html',
  styleUrls: ['./all-travels.component.scss']
})
export class AllTravelsComponent implements OnInit {

  travels: any[];

  constructor(private travelService: TravelService) { }
  
    ngOnInit() {
      this.travelService.getAllCards().subscribe(allTravels => this.travels = allTravels);

      setTimeout(() => {
        console.log(this.travels);
      }, 1500)
    }


}
