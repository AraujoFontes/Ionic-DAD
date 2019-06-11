import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SessionService } from './session.service';
import { Usuario } from './models/usuario';
@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {
  
  usuario: Usuario;
  date={};
  
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
  criarConta(dados){
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + 'usuario/cadastro', dados)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
  cadastrarAnimal(dados){
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + 'animal', dados)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
  cadastrarConsulta(dados){
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + 'usuario/consultar', dados)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
  buscarConsulta(){
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'gestor/consultas')
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
  efetuarConsulta(dados){
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + 'gestor/consultas', dados)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
  efetuarConsultaPost(dados){
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + 'gestor/efetuar-consulta', dados)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
  retirarAnimal(id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.API_URL + 'animal?id='+id)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
  buscarUsuarios(){
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'usuario/get')
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
  cadastrarGestor(dados){
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + 'gestor', dados)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
  recaptcha(dados){
    return new Promise((resolve, reject) => {
      this.http.post('https://www.google.com/recaptcha/api/siteverify', dados)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }
}
