import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuentaAhorros } from '../common/cuenta-ahorros';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CuentaAhorrosService {

  private baseUrl = 'http://localhost:8080/api/cuentas';

  constructor(private httpClient: HttpClient) { }

  obtenerCuentas(): Observable<CuentaAhorros[]> {
    return this.httpClient.get<CuentaAhorros[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  obtenerCuenta(id: number): Observable<CuentaAhorros> {
    return this.httpClient.get<CuentaAhorros>(this.baseUrl + '/' + id).pipe(
      map(response => response)
    );
  }

  guardar(cuentaAhorros: CuentaAhorros): Observable<Object> {
    return this.httpClient.post(this.baseUrl, cuentaAhorros);
  }

  actualizar(cuentaAhorros: CuentaAhorros): Observable<Object> {
    return this.httpClient.put(this.baseUrl, cuentaAhorros);
  }

  eliminar(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }
}
