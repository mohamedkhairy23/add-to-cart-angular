import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: any;
  data: any = {};
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.loading = true;

    this.service.getProductsById(this.id).subscribe(
      (result) => {
        this.data = result;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }
}
