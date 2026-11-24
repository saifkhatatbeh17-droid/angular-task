import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  storeName: string = 'ElectroShop';
  storeAddress: string = 'Amman, Jordan';
  contactEmail: string = 'support@electroshop.com';
  copyrightMessage: string = '© 2026 ElectroShop. All rights reserved.';
}
