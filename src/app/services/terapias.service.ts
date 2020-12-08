import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Terapia} from '../views/terapias/terapia.model';

@Injectable({
  providedIn: 'root'
})
export class TerapiasService {


  url = 'http://localhost:8080/api/terapia';
  constructor(private http: HttpClient ) { }

  public salvar(terapia: Terapia){
    console.log('aqui');
    return this.http.post(this.url , terapia);

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
