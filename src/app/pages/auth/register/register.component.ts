import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router) {}

  onRegister() {
    console.log('Registrar usuario');
    this.router.navigate(['/auth/login']);
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
    const isDesktop = window.innerWidth > 460;
    this.backgroundImage = isDesktop ? '/assets/background2.jpg' : '/assets/background.jpg';
  }
}