import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    ButtonModule,
    RippleModule,
    MenubarModule,
    AvatarModule,
    CommonModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class HeaderComponent {

  @Input() headerTitle: string = '';

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {}

  goToHome(): void {
    this.router.navigate(['/homepage']);
  }

  navigateTo(section: string): void {
    this.router.navigate([`/${section}`]);
  }

  goToCart(): void {
    this.router.navigate(['/carrito']);
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  goToSearch(): void {
    this.router.navigate(['/search']);
  }

  logout(): void {
    console.log('Se hizo clic en Cerrar sesión');
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Se cerró la sesión exitosamente',
      life: 7000
    });
    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    }, 1000);
  }
}