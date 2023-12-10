import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];

  // dependency injection to products service
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.service.getAllProducts().subscribe(
      (result: any) => {
        this.products = result;
      },
      (error) => {
        alert(error);
      }
    );
  }

  getCategories() {
    this.service.getAllCategories().subscribe(
      (result: any) => {
        console.log(result);

        this.categories = result;
      },
      (error) => {
        alert(error);
      }
    );
  }

  filterCategory(event: any) {
    let value = event.target.value;
    value === 'all' ? this.getProducts() : this.getCategoriesProducts(value);
  }

  getCategoriesProducts(keyword: String) {
    this.service.getProductsByCategory(keyword).subscribe((result: any) => {
      this.products = result;
    });
  }
}
