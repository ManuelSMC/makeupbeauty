import { Component, HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext'; // Importa el módulo aquí
import { ButtonModule } from 'primeng/button'; // Importa el módulo aquí

@Component({
  selector: 'app-login',
  standalone: true, // Indica que es un componente standalone
  imports: [InputTextModule, ButtonModule], // Importa los módulos necesarios
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    // Lógica de inicio de sesión aquí
    console.log('Iniciar sesión');
    this.router.navigate(['/auth/register']);
  }

  backgroundImage: string = '';

  ngOnInit() {
    this.updateBackgroundImage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateBackgroundImage();
  }

  private updateBackgroundImage() {
    // Breakpoint: 768px (ajusta si necesitas)
    const isDesktop = window.innerWidth > 460;
    this.backgroundImage = isDesktop ? '/assets/background2.jpg' : '/assets/background.jpg';
  }
}