import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosComponent} from './components/usuarios/usuarios.component';
import {CrearUsuarioComponent} from './components/crear-usuario/crear-usuario.component';
import {ActualizarUsuarioComponent} from './components/actualizar-usuario/actualizar-usuario.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'crear', component: CrearUsuarioComponent },
  { path: 'actualizar/:id', component: ActualizarUsuarioComponent },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
