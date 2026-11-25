import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetailsComponent {
  @Input() productName: string = 'Laptop';
  @Input() productDescription: string = 'Dell Laptop, Core i7, 16GB RAM';
  @Input() productPrice: number = 850;
  @Input() isAvailable: boolean = true;

  quantity = signal(1);

  @Output() addToCart = new EventEmitter<{ name: string; quantity: number }>();

  increaseQuantity() {
    this.quantity.update((q) => q + 1);
  }

  decreaseQuantity() {
    this.quantity.update((q) => (q > 1 ? q - 1 : 1));
  }

  onAddToCart() {
    this.addToCart.emit({
      name: this.productName,
      quantity: this.quantity(),
    });
  }
}
