import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCuentaDigitalComponent } from './component/crear-cuenta-digital/crear-cuenta-digital.component';
import { EditarPersonaCuentaComponent } from './component/editar-persona-cuenta/editar-persona-cuenta.component';
import { ListaPersonasCuentasComponent } from './component/lista-personas-cuentas/lista-personas-cuentas.component';


const routes: Routes = [
  { path: '', redirectTo: 'lista-cuentas', pathMatch: 'full'},
  { path: 'lista-cuentas', component: ListaPersonasCuentasComponent },
  { path: 'crear-cuenta', component: CrearCuentaDigitalComponent },
  { path: 'editar-persona-cuenta/:id', component: EditarPersonaCuentaComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
