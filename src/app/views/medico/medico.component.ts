import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent {


@ViewChild('medicoForm' ) medicoForm: NgForm;

  salvar(){
    console.log(this.medicoForm.value.nome);
  }

}
