import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../../services/flight-data.service';
import { Flight } from '../../Flight';

@Component({
  selector: 'app-flight-data',
  standalone: true,
  imports: [],
  templateUrl: './flight-data.component.html',
  styleUrl: './flight-data.component.css'
})
export class FlightDataComponent {

  allFlights: Flight[] = []
  constructor(private flightDataService: FlightDataService) {}

  ngOnInit() {
    // this.flightDataService.getFlightData().subscribe((flights) => this.allFlights = flights);
    this.flightDataService.getFlightData().subscribe((flights) => console.log(flights));
    
  }

}
