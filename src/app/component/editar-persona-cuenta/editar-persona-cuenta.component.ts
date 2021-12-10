import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentaAhorros } from 'src/app/common/cuenta-ahorros';
import { CuentaAhorrosService } from 'src/app/service/cuenta-ahorros.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-persona-cuenta',
  templateUrl: './editar-persona-cuenta.component.html',
  styleUrls: ['./editar-persona-cuenta.component.css']
})
export class EditarPersonaCuentaComponent implements OnInit {

  cuenta: CuentaAhorros;
  id: number = 0;

  constructor(private cuentaService: CuentaAhorrosService,
    private router: Router,
    private route: ActivatedRoute,
    private personaService: PersonaService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.cuentaService.obtenerCuenta(this.id).subscribe(
      data => {
        this.cuenta = data;
      }
    );
  }

  volverALista() {
    this.router.navigate(['lista-cuentas']);
  }

  actualizarDatos() {
    this.personaService.actualizar(this.cuenta.persona).subscribe(
      data => console.log(data)
    );
    this.cuenta = new CuentaAhorros();
  }

  onSubmit() {
    this.actualizarDatos();
    this.router.navigate(['lista-cuentas']);
  }

}
