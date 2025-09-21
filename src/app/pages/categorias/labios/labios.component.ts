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
  selector: 'app-labios',
  templateUrl: './labios.component.html',
  styleUrls: ['./labios.component.css'],
  imports: [MenubarModule, CardModule, HeaderComponent, FooterComponent, ButtonModule],
  standalone: true,
})
export class LabiosComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  navigateToCategory(category: string) {
    this.router.navigate(['/category', category.toLowerCase()]);
  }
}