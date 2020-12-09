import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {TerapiasService} from '../../services/terapias.service';
import {Terapia} from './terapia.model';
import {Medicamento} from '../medicamento/medicamento.model';
import {Medico} from '../medico/medico.model';
import {MedicoService} from '../../services/medico.service';
import {MedicamentoService} from '../../services/medicamento.service';

@Component({
  selector: 'app-terapias',
  templateUrl: './terapias.component.html',
  styleUrls: ['./terapias.component.css']
})
export class TerapiasComponent implements OnInit {

  @ViewChild('terapiasForm', {static: false}) terapiasForm: NgForm;
  medicamentos: Medicamento[];
  medicos: Medico[];

  constructor(
    private terapiasService: TerapiasService,
    private router: Router,
    private medicoService: MedicoService,
    private medicamentoService: MedicamentoService
  ) {
  }

  ngOnInit() {
    this.medicamentoService.buscarTodos()
      .subscribe(
        response => this.medicamentos = (response as Medicamento[]));

    this.medicoService.buscarTodos()
      .subscribe(
        response => this.medicos = (response as Medico[]));
  }

  salvar() {

    const terapia = new Terapia();
    terapia.nome = this.terapiasForm.value.nome;
    terapia.inicioTerapia = this.terapiasForm.value.dataComeco;
    terapia.fimTerapia = this.terapiasForm.value.dataFim;
    terapia.medicamentoUm = this.terapiasForm.value.medicamentoUm;
    terapia.doseUm = this.terapiasForm.value.doseUm;
    terapia.intervaloUm = this.terapiasForm.value.intervaloUm;
    terapia.medicamentoDois = this.terapiasForm.value.medicamentoDois;
    terapia.doseDois = this.terapiasForm.value.doseDois;
    terapia.intervaloDois = this.terapiasForm.value.intervaloDois;
    terapia.medicamentoTres = this.terapiasForm.value.medicamentoTres;
    terapia.doseTres = this.terapiasForm.value.doseTres;
    terapia.intervaloTres = this.terapiasForm.value.intervaloTres;
    terapia.medico = this.terapiasForm.value.medico;
    this.terapiasService.salvar(terapia).subscribe(
      () => this.router.navigate(['/minhasTerapias'])
    );
  }

}
