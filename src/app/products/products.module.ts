import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailsComponent } from './components/details/details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllProductsComponent, DetailsComponent],
  imports: [CommonModule, SharedModule],
})
export class ProductsModule {}
