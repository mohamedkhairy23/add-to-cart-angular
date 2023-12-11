import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() data: any = {};
  @Output() item = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.item.emit(this.data);
  }
}
