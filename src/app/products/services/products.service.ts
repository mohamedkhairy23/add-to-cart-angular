import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // dependency injection
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(environment.baseurl + 'products');
  }

  getAllCategories() {
    return this.http.get(environment.baseurl + 'products/categories');
  }

  getProductsByCategory(keyword: any) {
    return this.http.get(environment.baseurl + 'products/category/' + keyword);
  }
}
