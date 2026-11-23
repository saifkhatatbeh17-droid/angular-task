import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  storeName: string = 'ElectroShop';
  storeDescription: string = 'Your favorite electronics store';
  storeAddress: string = 'Amman, Jordan';
  totalProducts: number = 12;
  isStoreOpen: boolean = true;
  currency: string = 'USD';

  productNames: string[] = ['Laptop', 'Smartphone', 'Headphones', 'Smart Watch', 'Keyboard'];
  productPrices: number[] = [750, 450, 80, 120, 45];

  featuredProduct = {
    name: 'Laptop',
    price: 750,
    description: 'High-performance laptop',
  };

  storeStatus: string = '';

  discountPercentage: number = 10;
  finalPrice: number = 0;

  summaryTotalProducts: number = 0;
  highestPrice: number = 0;
  lowestPrice: number = 0;
  totalProductsValue: number = 0;

  constructor() {
    if (this.isStoreOpen) {
      this.storeStatus = 'We Are Open';
    } else {
      this.storeStatus = 'We Are Closed';
    }

    if (this.discountPercentage > 0) {
      this.finalPrice =
        this.featuredProduct.price - (this.featuredProduct.price * this.discountPercentage) / 100;
    } else {
      this.finalPrice = this.featuredProduct.price;
    }

    this.summaryTotalProducts = this.productNames.length;

    if (this.productPrices.length > 0) {
      this.highestPrice = this.productPrices[0];
      this.lowestPrice = this.productPrices[0];

      for (let i = 0; i < this.productPrices.length; i++) {
        const price = this.productPrices[i];
        this.totalProductsValue += price;

        if (price > this.highestPrice) {
          this.highestPrice = price;
        }

        if (price < this.lowestPrice) {
          this.lowestPrice = price;
        }
      }
    }
  }
}
