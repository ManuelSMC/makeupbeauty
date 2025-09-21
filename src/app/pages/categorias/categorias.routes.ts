import { Routes } from '@angular/router';
import { OjosComponent } from './ojos/ojos.component';
import { LabiosComponent } from './labios/labios.component';
import { RostrosComponent } from './rostros/rostros.component';

export const CATEGORIAS_ROUTES: Routes = [
  { path: 'ojos', component: OjosComponent },
  { path: 'labios', component: LabiosComponent },
  { path: 'rostro', component: RostrosComponent }
];