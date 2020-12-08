import {Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {TerapiasService} from '../../services/terapias.service';
import {Terapia} from './terapia.model';

@Component({
  selector: 'app-terapias',
  templateUrl: './terapias.component.html',
  styleUrls: ['./terapias.component.css']
})
export class TerapiasComponent {

  @ViewChild('terapiasForm', {static: false}) terapiasForm: NgForm;

  constructor(private terapiasService: TerapiasService , private router: Router) {
  }

  salvar(){
    console.log(this.terapiasForm.value);
    const terapia = new Terapia( );
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
