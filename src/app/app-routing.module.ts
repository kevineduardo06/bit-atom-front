import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import {PacienteComponent} from './views/paciente/paciente.component';
import {TerapiasComponent} from './views/terapias/terapias.component';
import {MedicoComponent} from './views/medico/medico.component';
import {ListaTerapiasComponent} from './views/lista-terapias/lista-terapias.component';
import {ListaMedicamentosComponent} from './views/lista-medicamentos/lista-medicamentos.component';
import {ListaMedicoComponent} from './views/lista-medico/lista-medico.component';
import {MedicamentoComponent} from './views/medicamento/medicamento.component';


const routes: Routes = [


  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'cadastro', component: PacienteComponent},
  {path: 'cadastrarTerapia', component: TerapiasComponent},
  {path: 'cadastrarMedicamento', component: MedicamentoComponent},
  {path: 'cadastrarMedico', component: MedicoComponent},
  {path: 'minhasTerapias', component: ListaTerapiasComponent},
  {path: 'meusMedicamentos', component: ListaMedicamentosComponent},
  {path: 'meusMedicos', component: ListaMedicoComponent},
  {path: 'home', component: HomeComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
