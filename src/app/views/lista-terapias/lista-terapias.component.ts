import { Component, OnInit } from '@angular/core';
import {Medico} from '../medico/medico.model';
import {MedicoService} from '../../services/medico.service';
import {Router} from '@angular/router';
import {Terapia} from '../terapias/terapia.model';
import {TerapiasService} from '../../services/terapias.service';

@Component({
  selector: 'app-lista-terapias',
  templateUrl: './lista-terapias.component.html',
  styleUrls: ['./lista-terapias.component.css']
})
export class ListaTerapiasComponent implements OnInit {

  terapias: Terapia[];

  constructor(
    public terapiasService: TerapiasService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.terapiasService.buscarTodos()
      .subscribe(
        response => {
          this.terapias = (response as Terapia[]);

        }
      );
  }

  editar(id: number) {
    this.router.navigate([`/editarTerapia/${id}`]);
  }

  excluir(id: number) {
    this.terapiasService.excluir(id).subscribe(
      () => this.listar()
    );
  }
}
