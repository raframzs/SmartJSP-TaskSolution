import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
/**
 * Esta clase consume los recursos de datos por medio de peticiones
 * HTTP al backend, el mapeo de los datos los realiza spring.
 */
export class UsuarioService {

  /* URL base para conectarse al backend */
  private API_URL = 'http://localhost:8080/usuarios/';

  constructor(private httpClient: HttpClient) {
  }

  public getAllUsuarios(): Observable<Usuario []> {
    return this.httpClient.get<Usuario []>(this.API_URL);
  }

  public getUserById(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.API_URL + id);
  }

  public saveUsuario(user: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.API_URL, user);
  }

  public deleteById(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + 'delete/' + id);
  }

  public updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.API_URL + 'usuario/' + id, usuario);
  }

}
