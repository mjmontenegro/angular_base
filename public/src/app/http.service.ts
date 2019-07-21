import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}
  
  getAll = () => this._http.get('/cakes')

  createItem = (itemData: any) => this._http.post(`/cakes/`, itemData)

  getOne = (id: string) => this._http.get(`/cakes/${id}`)

  updateItem = (id: string, itemData: any) => this._http.put(`/cakes/${id}`, itemData)
  
  deleteItem = (id: string) => this._http.delete(`/cakes/${id}`)
  
  rate = (id: string, itemData: any) => this._http.put(`/cakes/${id}/rate`, itemData)
}