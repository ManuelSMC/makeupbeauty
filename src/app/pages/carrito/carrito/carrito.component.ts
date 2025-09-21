// homepage.component.ts
import { Component } from '@angular/core';
import { Footer, MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { Router } from '@angular/router';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  imports: [MenubarModule, CardModule, HeaderComponent, FooterComponent, ButtonModule, DividerModule],
  standalone: true,
})
export class CarritoComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  navigateToCategory(category: string) {
    this.router.navigate(['/category', category.toLowerCase()]);
  }
}