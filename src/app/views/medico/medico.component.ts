import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {MedicoService} from '../../services/medico.service';
import {Medico} from './medico.model';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent {


@ViewChild('medicoForm', {static: false}) medicoForm: NgForm;

constructor(private medicoService: MedicoService , private router: Router) {
}

  salvar(){

    const medico = new Medico( );
    medico.nome = this.medicoForm.value.nome;
    medico.idPaciente = LoginService.idLogado;
    this.medicoService.salvar(medico).subscribe(
      () => this.router.navigate(['/meusMedicos'])
    );
  }

}
