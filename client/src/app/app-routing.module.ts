import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/_services/auth.guard';
import { PublicbusquedaComponent } from './pages/external/publicbusqueda/publicbusqueda.component';
import { PublicfutComponent } from './pages/external/publicfut/publicfut.component';
import { PublicseguimientoComponent } from './pages/external/publicseguimiento/publicseguimiento.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path: 'publicfut',
    component:PublicfutComponent
  },
  {
    path: 'publicseguimiento',
    component:PublicseguimientoComponent
  },
  {
    path: 'publicbusqueda',
    component:PublicbusquedaComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/layout.module').then((m) => m.LayoutModule),
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
