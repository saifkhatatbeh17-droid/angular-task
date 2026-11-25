import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCartComponent {
  @Input() productName: string = '';
  @Input() productPrice: number = 0;
  @Input() quantity: number = 0;
  @Input() totalPrice: number = 0;
}
