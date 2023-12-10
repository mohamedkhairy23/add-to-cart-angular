import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductItemComponent,
  ],
  imports: [CommonModule, BrowserModule, RouterModule, HttpClientModule],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductItemComponent,
  ],
})
export class SharedModule {}
