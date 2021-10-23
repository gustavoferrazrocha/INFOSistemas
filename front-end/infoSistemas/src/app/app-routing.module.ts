import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AddVehicleComponent } from './pages/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './pages/update-vehicle/update-vehicle.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'addvehicle', component: AddVehicleComponent },
  { path: 'updatevehicle', component: UpdateVehicleComponent},
  { path: '', redirectTo: 'home',  pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
