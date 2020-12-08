import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MedicamentoService} from '../../services/medicamento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Medico} from '../medico/medico.model';
import {Medicamento} from '../medicamento/medicamento.model';

@Component({
  selector: 'app-edita-medicamento',
  templateUrl: './edita-medicamento.component.html',
  styleUrls: ['./edita-medicamento.component.css']
})
export class EditaMedicamentoComponent implements OnInit {
  @ViewChild('medicamentoForm', {static: false}) medicamentoForm: NgForm;
  private id: number;

  constructor(
    private medicamentoService: MedicamentoService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  consultar(id: number) {
    this.medicamentoService.consultar(id).subscribe(
      response =>
        this.medicamentoForm.form.patchValue({nome: response['nome']})

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

  salvar(){

    const medicamento = new Medicamento( );
    medicamento.nome = this.medicamentoForm.value.nome;
    medicamento.sintomaUm = this.medicamentoForm.value.sintomaUm;
    medicamento.sintomaDois = this.medicamentoForm.value.sintomaDois;
    medicamento.sintomaTres = this.medicamentoForm.value.sintomaTres;
    this.medicamentoService.salvar(medicamento).subscribe(
      () => this.router.navigate(['/meusMedicamentos'])
    );
  }

}
