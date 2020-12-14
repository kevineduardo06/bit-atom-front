import { Component, OnInit } from '@angular/core';
import {Medico} from '../medico/medico.model';
import {MedicoService} from '../../services/medico.service';
import {Router} from '@angular/router';
import {Medicamento} from '../medicamento/medicamento.model';
import {MedicamentoService} from '../../services/medicamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-medicamentos',
  templateUrl: './lista-medicamentos.component.html',
  styleUrls: ['./lista-medicamentos.component.css']
})
export class ListaMedicamentosComponent implements OnInit {

  medicamentos: Medicamento[];

  constructor(
    public medicamentoService: MedicamentoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.medicamentoService.buscarTodos()
      .subscribe(
        response => {
          this.medicamentos = (response as Medicamento[]);

        }
      );
  }

  editar(id: number) {
    this.router.navigate([`/editarMedicamento/${id}`]);
  }
  showErrorAlert() {
    Swal.fire('Excluido!', 'Excluido com sucesso!', 'error');
  }
  excluir(id: number) {
    this.showErrorAlert();
    this.medicamentoService.excluir(id).subscribe(
      () => this.listar()
    );
  }

}
