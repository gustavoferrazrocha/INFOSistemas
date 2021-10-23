import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicles';
import { ModalComponent } from '../modal/modal.component';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';


@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  @Output() responseForm = new EventEmitter();

  year: number | null = null;
  brand: string = "";
  model: string = "";
  document: string = "";
  chassi: string = "";
  licensePlate: string = "";
  
  constructor(public dialog: MatDialog, private router: Router) { }
    
    ngOnInit() {
    }
    
    cancelAction(){
      const dialogRef = this.dialog.open(ModalComponent);

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.router.navigate(['home'])
        }
      });
    }
    
    sendVehicleDataToPage(){
      this.router.navigate(['home'])
      this.responseForm.emit({
        chassi: this.chassi,
        year: this.year,
        brand: this.brand,
        document: this.document,
        licensePlate: this.licensePlate,
        model: this.model
      })
    }
  }

