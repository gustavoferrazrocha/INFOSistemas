import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicles';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {
  vehicles: Vehicle[] = [];
  


  constructor(private router: Router, private vehicleService: VehicleService) { 
    
  }
  goUpdateForm(){
    this.router.navigate(['updatevehicle'])
  }
  async deleteVehicle(id: string){
    try {
      await this.vehicleService.deleteVehicle(id)
      await this.loadVehicles()
    } catch (error) {
      console.error(error)
    }
  }
  async loadVehicles(){
    try {
      const response = await this.vehicleService.getVehiclePage({page: 1, limit:10})
      this.vehicles = response;
    } catch (error) {
      console.error(error)
    }
  }
  async ngOnInit(){
    await this.loadVehicles()
    
  }

}
