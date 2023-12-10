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
  loading: boolean = false;
  // dependency injection to products service
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (result: any) => {
        this.products = result;
        this.loading = false;
      },
      (error) => {
        alert(error);
        this.loading = false;
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (result: any) => {
        console.log(result);

        this.categories = result;
        this.loading = false;
      },
      (error) => {
        alert(error);
        this.loading = false;
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
