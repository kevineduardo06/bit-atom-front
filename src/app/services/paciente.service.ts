import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Paciente} from '../views/paciente/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url = 'http://localhost:8080/api/paciente';
  constructor(private http: HttpClient ) { }

  public salvar(paciente: Paciente){
    console.log('aqui');
    return this.http.post(this.url , paciente);

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
