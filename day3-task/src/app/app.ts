import { Component, computed, signal } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart';

@Component({
  selector: 'app-root',
  imports: [ProductDetailsComponent, ShoppingCartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Part 3: Parent Signals for Product Information
  productName = signal('Laptop');
  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');
  productPrice = signal(850);
  isAvailable = signal(true);

  // Part 4 & 5: Cart Signals
  cartProductName = signal('');
  cartProductPrice = signal(0);
  cartQuantity = signal(0);
  cartTotalPrice = computed(() => this.cartProductPrice() * this.cartQuantity());

  // Receive event from ProductDetailsComponent
  onAddToCart(item: { name: string; quantity: number }) {
    this.cartProductName.set(item.name);
    this.cartProductPrice.set(this.productPrice());
    this.cartQuantity.set(item.quantity);
  }

  // Part 6: Switch between Product 1 (Laptop) and Product 2 (Wireless Headphones)
  selectLaptop() {
    this.productName.set('Laptop');
    this.productDescription.set('Dell Laptop, Core i7, 16GB RAM');
    this.productPrice.set(850);
    this.isAvailable.set(true);
  }

  selectHeadphones() {
    this.productName.set('Wireless Headphones');
    this.productDescription.set('Bluetooth Headphones');
    this.productPrice.set(120);
    this.isAvailable.set(true);
  }
}
