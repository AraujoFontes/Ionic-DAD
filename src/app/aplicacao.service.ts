import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SessionService } from './session.service';
import { Usuario } from './models/usuario';
@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {
  
  usuario: Usuario;
  
  constructor(public http: Http, public session: SessionService) { }
  
  private API_URL = 'http://localhost:8000/api/';
  
  login(nome_usuario: string, senha: string){  
    var data = {
      nome_usuario: nome_usuario,
      senha: senha
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL+'usuario/login', data)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
  logout(){
    this.session.remove();
  }
  todosAnimais(){
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'usuario/login')
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }
}
