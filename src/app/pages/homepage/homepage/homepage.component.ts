// homepage.component.ts
import { Component } from '@angular/core';
import { Footer, MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [MenubarModule, CardModule, HeaderComponent, FooterComponent, ButtonModule],
  standalone: true,
})
export class HomepageComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  navigateTo(section: string): void {
    this.router.navigate([`/${section}`]);
  }
  
  navigateToCategory(category: string) {
    this.router.navigate(['/category', category.toLowerCase()]);
  }
}