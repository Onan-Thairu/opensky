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
  constructor(private flightData: FlightDataService) {}

  ngOnInit() {
    return this.allFlights = this.flightData.getFlightData()
  }

}
