import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Response<T> = {
  data: T;
  statusCode: number;
} 
type HttpGetParams = {
  url: string;
  params?: {[key: string]:any}
}
type HttpPostParams ={
  url: string;
  params?: {[key: string]: any};
  body: any
}
type HttpPutParams ={
  url: string;
  params?: {[key: string]: any};
  body: any;
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) {}

  get<T>({url, params}:HttpGetParams):Promise<Response<T>>{
    return new Promise((resolve, reject) => {
      this.http.get<T>(`${this.baseUrl}${url}`, {params}).subscribe((success) => {
        resolve({
          data: success,
          statusCode: 200,
        })
      },(error) =>{
        reject(error)
      })
    })
  }

  post({url, body}:HttpPostParams):Promise<void>{
    return new Promise((resolve, reject) =>{
      this.http.post(`${this.baseUrl}${url}`, body).subscribe((success) =>{
        resolve()
      }, (error) =>{
        reject(error)
      })
    })
  }

  put({url, params, body}:HttpPutParams):Promise<void>{
    return new Promise((resolve, reject) =>{
      this.http.put(`${this.baseUrl}${url}`, {params, body}).subscribe((sucess) =>{
        resolve()
      }, (error) =>{
        reject(error)
      })
    })
  }

  delete(url: string):Promise<void>{
    return new Promise((resolve, reject) =>{
      this.http.delete(`${this.baseUrl}${url}`).subscribe((sucess) =>{
        resolve()
      },(error) =>{
        reject(error)
      })
    })
  }
}
