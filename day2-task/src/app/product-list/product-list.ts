import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products = [
    {
      name: 'Laptop',
      description: 'High-performance laptop',
      price: 750,
      image: 'images/laptop.svg',
      isAvailable: true,
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone',
      price: 450,
      image: 'images/smartphone.svg',
      isAvailable: true,
    },
    {
      name: 'Headphones',
      description: 'Wireless headphones',
      price: 80,
      image: 'images/headphones.svg',
      isAvailable: true,
    },
    {
      name: 'Smart Watch',
      description: 'Smart fitness watch',
      price: 120,
      image: 'images/smartwatch.svg',
      isAvailable: true,
    },
    {
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 45,
      image: 'images/keyboard.svg',
      isAvailable: false,
    },
  ];

  buyProduct(productName: string) {
    alert('You added ' + productName + ' to your cart!');
  }
}
