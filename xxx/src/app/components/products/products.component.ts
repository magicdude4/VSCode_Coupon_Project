import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(allProducts => this.products = allProducts);
  }

}
