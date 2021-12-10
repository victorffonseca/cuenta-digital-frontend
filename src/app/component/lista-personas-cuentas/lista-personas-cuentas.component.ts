import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentaAhorros } from 'src/app/common/cuenta-ahorros';
import { CuentaAhorrosService } from 'src/app/service/cuenta-ahorros.service';

@Component({
  selector: 'app-lista-personas-cuentas',
  templateUrl: './lista-personas-cuentas.component.html',
  styleUrls: ['./lista-personas-cuentas.component.css']
})

export class ListaPersonasCuentasComponent implements OnInit {

  cuentas: CuentaAhorros[];

  constructor(private cuentaServicio: CuentaAhorrosService,
    private router: Router) { }

  ngOnInit() {
    this.cuentasLista();
  }

  cuentasLista() {
    this.cuentaServicio.obtenerCuentas().subscribe(
      data => {
        this.cuentas = data;
      });
  }

  editarDatos (id: number) {
    this.router.navigate(['editar-persona-cuenta', id]);
  }

  eliminarCuenta(id: number) {
    this.cuentaServicio.eliminar(id).subscribe(
      data => {
        console.log(data);
        this.cuentasLista();
      }
    );
  }

}
