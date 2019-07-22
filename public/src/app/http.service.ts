import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}
  
  getAll = () => this._http.get('/products')

  getOne = (id: string) => this._http.get(`/products/${id}`)

  create = (data: any) => this._http.post(`/products/`, data)

  update = (id: string, data: any) => this._http.put(`/products/${id}`, data)
  
  delete = (id: string) => this._http.delete(`/products/${id}`)
  
  // rate = (id: string, data: any) => this._http.put(`/products/${id}/rate`, data)
}