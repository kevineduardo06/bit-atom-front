import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Medico} from '../views/medico/medico.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MedicoService {
   url = 'http://localhost:8080/api/medico';
  constructor(private http: HttpClient ) { }

  public salvar(medico: Medico){
    console.log('aqui');
    return this.http.post(this.url , medico);

  }

  buscarTodos(){
    return this.http.get(this.url);
  }

  excluir(id: number){
    return this.http.delete(`${this.url}/${id}` );
  }

  consultar(id: number){
    return this.http.get(`${this.url}/${id}`);
  }


}
