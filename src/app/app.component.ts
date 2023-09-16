import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService) {}
  title = 'wedding-frontend';
  data: any;

  ngOnInit() {
    this.getUser();
  }

  onProductCreate(products: { pName: string; desc: string; price: string }) {
    this.productService.createProduct(products).subscribe((res) => {
      return (this.data = res);
    }),
      (error: any): void => {
        return error;
      };
  }

  getUser() {
    this.productService.getUser().subscribe((response) => {}),
      (error: any): void => {};
  }
}
