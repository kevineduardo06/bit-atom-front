import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {MedicoService} from '../../services/medico.service';
import {Medico} from '../medico/medico.model';
import {Medicamento} from './medicamento.model';
import {MedicamentoService} from '../../services/medicamento.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent  {

  @ViewChild('medicamentoForm', {static: false}) medicamentoForm: NgForm;

 constructor(private medicamentoService: MedicamentoService, private router: Router) {
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
