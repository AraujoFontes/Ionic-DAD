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
  
  private API_URL = 'http://localhost/trabalhoDAD/public/api/';
  
  login(nome_usuario: string, senha: string){  

    let headers = new Headers();
    var data = {
      nome_usuario: nome_usuario,
      senha: senha
    };
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise((resolve, reject) => {
      this.http.post('http://localhost/trabalhoDAD/public/api/usuario/login', data)
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
  criaSession() {
    
    //disparando a sessão
    this.session.create(this.usuario);
    
  }
}
