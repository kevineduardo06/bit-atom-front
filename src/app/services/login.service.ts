import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../views/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static idLogado: number;
  url = 'http://localhost:8080/api/login';
  constructor(private http: HttpClient,  ) { }

  public logar(login: Usuario){
    console.log('aqui');
    return this.http.post(this.url, login );

  }
}
