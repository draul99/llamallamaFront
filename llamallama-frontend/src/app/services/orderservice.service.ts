import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../models/compra.model';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  private API = 'http://localhost:8088/llamallama/v1/';


  constructor(private http:HttpClient) { }

  getCompra(){
    return this.http.get(this.API+'compras')
  }

  createCompra(compra: Compra){
    return this.http.get(this.API+'compras')
  }


}
