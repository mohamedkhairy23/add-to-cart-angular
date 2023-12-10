import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  // Data Coming from parent, Then @Input()
  @Input() title: string = '';
  @Input() data: any[] = [];

  // Data sending from child, Then @Output()
  @Output() selectedValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  filterData(event: any) {
    this.selectedValue.emit(event);
  }
}
