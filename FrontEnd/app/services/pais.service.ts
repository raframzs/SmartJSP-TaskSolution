import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pais} from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private API_URL = 'http://localhost:8080/pais/';

  constructor(private httpClient: HttpClient) { }

  public getAllPaises(): Observable<Pais []>{
    return this.httpClient.get<Pais []>(this.API_URL);
  }

}
