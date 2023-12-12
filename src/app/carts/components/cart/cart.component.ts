import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  total: any = 0;
  success: boolean = false;

  constructor(private service: CartsService) {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();
  }

  increaseQuantity(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  decreaseQuantity(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      this.getCartTotal();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }

  detectChange() {
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  deleteProductFromCart(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearShoppingCart() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  getCartTotal() {
    this.total = 0;
    for (let i in this.cartProducts) {
      this.total +=
        this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }

  addCart() {
    if (this.cartProducts.length > 0) {
      let orderProducts = this.cartProducts.map((item) => {
        return { productId: item.item.id, quantity: item.quantity };
      });
      let model = {
        userId: 5,
        date: new Date(),
        products: orderProducts,
      };
      this.service.createNewCart(model).subscribe((result) => {
        this.success = true;
      });
      this.cartProducts = [];
      this.getCartTotal();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
