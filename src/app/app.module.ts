import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './views/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {TerapiasComponent} from './views/terapias/terapias.component';
import {LoginComponent} from './views/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PacienteComponent } from './views/paciente/paciente.component';
import { MedicamentoComponent } from './views/medicamento/medicamento.component';
import { MedicoComponent } from './views/medico/medico.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListaTerapiasComponent } from './views/lista-terapias/lista-terapias.component';
import { ListaMedicamentosComponent } from './views/lista-medicamentos/lista-medicamentos.component';
import { ListaMedicoComponent } from './views/lista-medico/lista-medico.component';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { ToolbarCompletaComponent } from './views/toolbar-completa/toolbar-completa.component';
import {MatMenuModule} from '@angular/material/menu';
import {PerfilComponent} from './views/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TerapiasComponent,
    LoginComponent,
    PacienteComponent,
    MedicamentoComponent,
    MedicoComponent,
    ListaTerapiasComponent,
    ListaMedicamentosComponent,
    ListaMedicoComponent,
    ToolbarComponent,
    ToolbarCompletaComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
