import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasCuentasComponent } from './component/lista-personas-cuentas/lista-personas-cuentas.component';
import { EditarPersonaCuentaComponent } from './component/editar-persona-cuenta/editar-persona-cuenta.component';
import { CrearCuentaDigitalComponent } from './component/crear-cuenta-digital/crear-cuenta-digital.component';
import { PersonaService } from './service/persona.service';
import { CuentaAhorrosService } from './service/cuenta-ahorros.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EstadoPipe } from './estado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasCuentasComponent,
    EditarPersonaCuentaComponent,
    CrearCuentaDigitalComponent,
    EstadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaService, CuentaAhorrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
