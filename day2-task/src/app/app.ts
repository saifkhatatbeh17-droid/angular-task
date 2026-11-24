import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { NavbarComponent } from './navbar/navbar';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetailsComponent } from './product-details/product-details';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    NavbarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
