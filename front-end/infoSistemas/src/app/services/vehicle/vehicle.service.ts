import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicles';
import { HttpService } from '../http/http.service';

type GetVehiclePageParams = {
  page: number,
  limit: number,
}
type UpdateVehicleParams = {
  body: Omit<Vehicle, 'id'>,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpService) { }

 async getVehiclePage(params: GetVehiclePageParams){
    try {
      const response = await this.http.get<Vehicle[]>({url: '/api/vehicles',params })
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar veiculos')
    }
  }

  async getVehicle(id: string){
    try {
     const response = await this.http.get<Vehicle>({url: `/api/vehicles/${id}`})
     return response.data; 
    } catch (error) {
      throw new Error('Erro ao buscar veiculo')
    }
  }

  async createVehicle(body: Omit<Vehicle, 'id'>){
    try {
      await this.http.post({url: '/api/vehicles', body})
      console.log(body)
    } catch (error) {
      throw new Error('Erro ao cadastrar veiculo')
    }
  }

  async updateVehicle(params: UpdateVehicleParams){
    try {
      await this.http.put({url: `/api/vehicles/${params.id}`, body: params.body})
    } catch (error) {
      throw new Error('Erro ao autalizar veiculo')
    }
  }

  async deleteVehicle(id: string){
    try {
      await this.http.delete(`/api/vehicles/${id}`)
    } catch (error) {
      throw new Error('Erro ao deletar veiculo')
    }
  }
}
