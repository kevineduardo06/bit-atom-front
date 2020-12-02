import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-terapias',
  templateUrl: './terapias.component.html',
  styleUrls: ['./terapias.component.css']
})
export class TerapiasComponent {

  nome = new FormControl('');
  dataComeco = new FormControl('');
  dataFim = new FormControl('');
  medicamentos = new FormControl('');
  doses = new FormControl('');
  horarios = new FormControl('');
  medico = new FormControl('');

}
