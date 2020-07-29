import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("/assets/json/products.json");
  }

  public getTopProduct() {
    let topProduct = new Product(100, "Apple", 3.5, 120);
    return topProduct;
  }

  
  public getTopProductAsync(): Observable<Product> {
    const observable = Observable.create((observer: Observer<Product>) => {
      setTimeout(() => {
        if (Math.floor(Math.random()*2)===0){
        let topProduct = new Product(100, "Apple", 3.5, 120);
          observer.next(topProduct); //reports date - the product will be sent to the inline function which sends it to '.subscribe()'
          observer.complete();
        } else {
          observer.error("An error has occured.");
       }
      }, 2000);
    });
    return observable;
  }
}
