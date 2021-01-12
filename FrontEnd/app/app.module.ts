import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {UsuariosComponent} from './components/usuarios/usuarios.component';
import {CrearUsuarioComponent} from './components/crear-usuario/crear-usuario.component';
import {ActualizarUsuarioComponent} from './components/actualizar-usuario/actualizar-usuario.component';
import { HomeComponent } from './components/home/home.component';

import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsuariosComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule {
}
