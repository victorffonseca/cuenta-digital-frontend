import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentaAhorros } from 'src/app/common/cuenta-ahorros';
import { Persona } from 'src/app/common/persona';
import { CuentaAhorrosService } from 'src/app/service/cuenta-ahorros.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-crear-cuenta-digital',
  templateUrl: './crear-cuenta-digital.component.html',
  styleUrls: ['./crear-cuenta-digital.component.css']
})
export class CrearCuentaDigitalComponent implements OnInit {

  personas: Persona[];
  cuenta: CuentaAhorros;

  constructor(private cuentaService: CuentaAhorrosService,
    private router: Router,
    private personaService: PersonaService,
    private location: Location) { }

  ngOnInit() {
    this.cuenta = new CuentaAhorros();
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this.personaService.obtenerPersonas().subscribe(
      data => {
        this.personas = data;
      }
    );
  }

  guardarCuenta() {
    this.cuenta.estado = true;
    this.cuenta.balance = 0;
    this.cuenta.id = Math.floor(Math.random() * 99999999999) + 10000000000;
    this.cuentaService.guardar(this.cuenta).subscribe(
      data => console.log(data)
    );
    this.cuenta = new CuentaAhorros();
    this.cuenta.estado = true;
    this.volverALista();
  }

  onSubmit() {
    this.guardarCuenta();
  }

  volverALista() {
    this.router.navigate(['lista-cuentas']);
  }
}
