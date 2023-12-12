import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CartsService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  createNewCart(model: any) {
    return this.http.post(environment.baseurl + 'carts', model);
  }
}
