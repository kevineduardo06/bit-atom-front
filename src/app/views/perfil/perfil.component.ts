import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {MedicoService} from '../../services/medico.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Medico} from '../medico/medico.model';
import {PacienteService} from '../../services/paciente.service';
import {Paciente} from '../paciente/paciente.model';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  @ViewChild('pacienteForm', {static: false}) pacienteForm: NgForm;
  private id: number;

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute,
    private paciente: Paciente,
    private idLogado: LoginService
    ) {
  }

  consultar(id) {
    this.pacienteService.consultar(this.paciente.id).subscribe(
      response =>
        this.pacienteForm.form.patchValue({nome: response['nome']})

    );
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params.id;
        this.consultar(params.id);
      }
    );
  }

  salvar() {
    const paciente = new Paciente();
    paciente.nomePaciente = this.pacienteForm.value.nome;
    paciente.sexo = this.pacienteForm.value.sexo;
    paciente.dataNascimento = this.pacienteForm.value.dataNascimento;
    paciente.email = this.pacienteForm.value.email;
    paciente.senha = this.pacienteForm.value.senha;
    paciente.id = this.id;
    this.pacienteService.salvar(paciente).subscribe(
      () => this.router.navigate(['/home'])
    );
  }
}
