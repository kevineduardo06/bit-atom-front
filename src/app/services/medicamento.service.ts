import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Medicamento} from '../views/medicamento/medicamento.model';
import {Medico} from '../views/medico/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {



  url = 'http://localhost:8080/api/medicamento';
  constructor(private http: HttpClient ) { }

  public salvar(medicamento: Medicamento){
    console.log('aqui');
    return this.http.post(this.url , medicamento);

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
