import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Paciente} from './paciente.model';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {

  paciente: Paciente = {};
  confirmarSenha: string;



  salvar(){
    alert(this.paciente.nome);
  }

}
