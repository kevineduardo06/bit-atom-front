import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Paciente} from './paciente.model';
import {Router} from '@angular/router';
import {PacienteService} from '../../services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  @ViewChild('pacienteForm', {static: false}) pacienteForm: NgForm;
  paciente: Paciente = {};
  confirmarSenha: string;


  constructor(private pacienteService: PacienteService, private router: Router) {
  }

  salvar() {

    const paciente = new Paciente();
    paciente.nome = this.pacienteForm.value.nome;
    paciente.sexo = this.pacienteForm.value.sexo;
    paciente.dataNascimento = this.pacienteForm.value.dataNascimento;
    paciente.email = this.pacienteForm.value.email;
    paciente.senha = this.pacienteForm.value.senha;

    this.pacienteService.salvar(paciente).subscribe(
      () => this.router.navigate([''])
    );
  }

}
