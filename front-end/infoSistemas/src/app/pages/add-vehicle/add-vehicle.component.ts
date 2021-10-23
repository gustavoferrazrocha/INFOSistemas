import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicles';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  constructor(private vehicle: VehicleService) {
    
   }

  reciverFeedback(event: any) {
    this.createVehicle(event)
  }
  
  async createVehicle(body: Omit<Vehicle, 'id'>){
    await this.vehicle.createVehicle(body);    
  }
  ngOnInit(): void {
  }

}
