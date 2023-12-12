import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() data!: Product;
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 1;

  constructor() {}

  ngOnInit(): void {}

  addToCart() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
}
