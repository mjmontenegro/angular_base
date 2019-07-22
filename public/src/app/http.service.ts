import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}
  
  getAll = () => this._http.get('/pets')

  getOne = (id: string) => this._http.get(`/pets/${id}`)

  create = (data: any) => this._http.post(`/pets/`, data)

  update = (id: string, data: any) => this._http.put(`/pets/${id}`, data)
  
  delete = (id: string) => this._http.delete(`/pets/${id}`)

  checkName = (name: string) => this._http.get(`/pets/name/${name}`)
  
  // rate = (id: string, data: any) => this._http.put(`/pets/${id}/rate`, data)
}