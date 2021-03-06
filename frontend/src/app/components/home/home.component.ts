import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService,
    private router: Router) { }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();

  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: { count: Number, products: any[] }) => {
      this.products = prods.products;
      console.log(this.products)


    });


  }
}




