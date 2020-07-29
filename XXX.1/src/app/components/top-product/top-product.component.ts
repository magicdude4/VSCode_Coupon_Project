import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/products';
import { observable } from 'rxjs';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.css']
})
export class TopProductComponent implements OnInit {

  public errorMessage: string;
  public topProduct: Product;
  public done: boolean;
  public constructor(private productsService: ProductsService) { }

  public ngOnInit(): void {
  //  this.topProduct = this.productsService.getTopProductAsync();

  // makes sure that the 'loading.gif' is displayed only when the data from the server isn't present.
  const observable = this.productsService.getTopProductAsync();
  observable.subscribe(p => {
    this.topProduct = p;
    this.done = true; },
    error => { 
    this.errorMessage = error;
    this.done = true; }, 
    () => console.log("Done."));
  }

}
