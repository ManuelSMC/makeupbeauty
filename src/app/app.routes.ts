import { Routes } from '@angular/router';
import { OjosComponent } from './pages/categorias/ojos/ojos.component';
import { LabiosComponent } from './pages/categorias/labios/labios.component';
import { RostrosComponent } from './pages/categorias/rostros/rostros.component';
import { CarritoComponent } from './pages/carrito/carrito/carrito.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth',loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES)},
  { path: 'homepage', loadChildren: () => import('./pages/homepage/homepage/homepage.routes').then(m => m.HOMEPAGE_ROUTES)},
  { path: 'ojos', component: OjosComponent },
  { path: 'labios', component: LabiosComponent },
  { path: 'rostros', component: RostrosComponent },
  { path: 'carrito', component: CarritoComponent }
  //{ path: '**', component: NotFoundComponent } // Opcional: página de error
];