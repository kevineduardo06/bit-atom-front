import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MedicoService} from '../../services/medico.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Medico} from '../medico/medico.model';

@Component({
  selector: 'app-edita-medico',
  templateUrl: './edita-medico.component.html',
  styleUrls: ['./edita-medico.component.css']
})
export class EditaMedicoComponent implements OnInit {

  @ViewChild('medicoForm', {static: false}) medicoForm: NgForm;
  private id: number;

  constructor(
    private medicoService: MedicoService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  consultar(id: number) {
    this.medicoService.consultar(id).subscribe(
      response =>
        this.medicoForm.form.patchValue({nome: response['nome']})

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
    const medico = new Medico();
    medico.nome = this.medicoForm.value.nome;
    medico.id = this.id;
    this.medicoService.salvar(medico).subscribe(
      () => this.router.navigate(['/meusMedicos'])
    );
  }

}
