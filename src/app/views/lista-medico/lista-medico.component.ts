import {Component, OnInit} from '@angular/core';
import {MedicoService} from '../../services/medico.service';
import {Medico} from '../medico/medico.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-medico',
  templateUrl: './lista-medico.component.html',
  styleUrls: ['./lista-medico.component.css']
})
export class ListaMedicoComponent implements OnInit {

  medicos: Medico[];

  constructor(
    public medicoService: MedicoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.medicoService.buscarTodos()
      .subscribe(
        response => {
          this.medicos = (response as Medico[]);

        }
      );
  }

  editar(id: number) {
    this.router.navigate([`/editarMedico/${id}`]);
  }

  excluir(id: number) {
    this.medicoService.excluir(id).subscribe(
      () => this.listar()
    );
  }

}
