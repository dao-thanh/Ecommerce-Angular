import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { PRODUCTS_DATA } from '../_data/product';
const URL = 'https://ssupermarket.herokuapp.com/api/products';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient: HttpClient) { }
  // getProducts(): Observable<Product[]>{
  //   //return this.httpClient.get<Product[]>{PRODUCTS_DATA};
  //   return of(PRODUCTS_DATA);
  // }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(URL, product, httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      '${PRODUCT_URL}/${product.id}',
      product,
      httpOptions
    );
  }
  // getProducts(): Observable<Product[]>{
  //   return this.httpClient.get<Product[]>{PRODUCTS_DATA};
   
  // }
  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>('${PRODUCT_URL}/${id}');
  }


}
