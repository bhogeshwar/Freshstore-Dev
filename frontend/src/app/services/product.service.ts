import { Injectable, ɵresetJitOptions } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment'



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }
  /*To fetch all products from backend server*/
  getAllProducts(numberOfResuts: number = 10) {
    return this.http.get<any>(this.SERVER_URL + '/products',
      { params: { limit: numberOfResuts.toString() } });
  }
}
