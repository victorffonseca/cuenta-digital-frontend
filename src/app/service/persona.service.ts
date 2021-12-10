import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../common/persona';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseUrl = 'http://localhost:8080/api/personas';

  constructor(private httpClient: HttpClient) { }

  obtenerPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  obtenerPersona(cedula: string): Observable<Persona> {
    return this.httpClient.get<Persona>('${this.baseUrl}/${cedula}').pipe(
      map(response => response)
    );
  }

  guardar(persona: Persona): Observable<Object> {
    return this.httpClient.post(this.baseUrl, persona);
  }

  actualizar(persona: Persona): Observable<Object> {
    return this.httpClient.put(this.baseUrl, persona);
  }

  eliminar(cedula: string): Observable<Object> {
    return this.httpClient.delete('${this.baseUrl}/${cedula}');
  }
}
