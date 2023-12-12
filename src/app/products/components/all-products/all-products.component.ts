import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
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
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe((result: any) => {
      this.products = result;
      this.loading = false;
    });
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let existedItemInCartProducts = this.cartProducts.find(
        (item) => item.item.id === event.item.id
      );
      if (existedItemInCartProducts) {
        alert('Product is already in your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
