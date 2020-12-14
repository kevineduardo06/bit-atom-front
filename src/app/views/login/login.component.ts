import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {MedicamentoService} from '../../services/medicamento.service';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {Medicamento} from '../medicamento/medicamento.model';
import {Usuario} from './login.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm', {static: false}) loginForm: NgForm;

  constructor(private loginService: LoginService, private router: Router) {

  }
  showErrorAlert() {
    Swal.fire('Ops!', 'Preencha os campos corretamente!!', 'error')
  }
   alerta() {
     alert('Preencha os campos corretamente');
   }
  logar() {
    const logar = new Usuario();
    logar.email = this.loginForm.value.email;
    logar.senha = this.loginForm.value.senha;
    this.loginService.logar(logar).subscribe(
      (response) => {

        if (response != null) {
          LoginService.idLogado = (response as number);
          this.router.navigate(['/home']);
        } else {
        this.showErrorAlert();
          }


      }
    );
  }


}
