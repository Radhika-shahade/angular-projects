import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private httpclient : HttpClient) { }

  getProducts():Observable<any>
  {
    return this.httpclient.get<any>(`https://fakestoreapi.com/products/`)
  }
  
}
