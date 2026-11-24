import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  storeName: string = 'ElectroShop';
  welcomeMessage: string = 'Welcome to ElectroShop!';
  storeSlogan: string = 'Everything You Need in One Place';
}
