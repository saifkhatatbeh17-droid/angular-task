import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  selectedPage: string = 'Home';

  selectPage(pageName: string) {
    this.selectedPage = pageName;
  }
}
