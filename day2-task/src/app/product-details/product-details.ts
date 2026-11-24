import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetailsComponent {
  productName: string = 'Laptop';
  productDescription: string = 'High-performance laptop';
  productPrice: number = 750;
  productImage: string = 'images/laptop.svg';
  quantity: number = 1;
  isAvailable: boolean = true;
  discountPercentage: number = 10;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  getFinalPrice(): number {
    return this.productPrice - (this.productPrice * this.discountPercentage) / 100;
  }

  getTotalPrice(): number {
    return this.getFinalPrice() * this.quantity;
  }
}
