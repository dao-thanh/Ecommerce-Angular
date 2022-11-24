import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  productMessage: undefined | string;
  icon = faTrash;
  editIcon = faEdit;
  constructor(private product: ProductService) {
  }

  ngOnInit(): void {
    this.listProduct();
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "Product is deleted"
        this.listProduct();
      }
    })

    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  listProduct() {
    this.product.productList().subscribe((result) => {
      this.productList = result;
    })
  }

}
