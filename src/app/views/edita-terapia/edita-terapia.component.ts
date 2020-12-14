import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TerapiasService} from '../../services/terapias.service';
import {Terapia} from '../terapias/terapia.model';
import {Medicamento} from '../medicamento/medicamento.model';
import {Medico} from '../medico/medico.model';
import {MedicoService} from '../../services/medico.service';
import {MedicamentoService} from '../../services/medicamento.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-edita-terapia',
  templateUrl: './edita-terapia.component.html',
  styleUrls: ['./edita-terapia.component.css']
})
export class EditaTerapiaComponent implements OnInit {

  @ViewChild('terapiasForm', {static: false}) terapiasForm: NgForm;
  private id: number;
  medicamentos: Medicamento[];
  medicos: Medico[];

  constructor(
    private terapiasService: TerapiasService,
    private router: Router,
    private route: ActivatedRoute,
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

    this.route.params.subscribe(
      params => {
        this.id = params.id;
        this.consultar(params.id);
      }
    );
  }

  consultar(id: number) {
    this.terapiasService.consultar(id).subscribe(
      response =>
        this.terapiasForm.form.patchValue({
          nome: response['nome'],
          inicioTerapia: response['inicioTerapia'],
          fimTerapia: response['dataFim'],
          medicamentoUm: response['medicamentoUm'],
          doseUm: response['doseUm'],
          intervaloUm: response['intervaloUm'],
          medicamentoDois: response['medicamentoDois'],
          doseDois: response['doseDois'],
          intervaloDois: response['intervaloDois'],
          medicamentoTres: response['medicamentoTres'],
          doseTres: response['doseTres'],
          intervaloTres: response['intervaloTres'],
          medico: response['medico']

        })

    );
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
    terapia.id = this.id;
    terapia.idPaciente = LoginService.idLogado;
    this.terapiasService.salvar(terapia).subscribe(
      () => this.router.navigate(['/minhasTerapias'])
    );
  }

}
