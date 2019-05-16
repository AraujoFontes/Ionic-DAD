import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {
  
  constructor(public http: Http) { }
  
  private API_URL = 'https://devel8.dialhost.com.br/projetos/trabalhoDAD-laravel/public/api/';
  
  login(nome_usuario: string, senha: string) {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa("daniel:ZGExMjM0NTZ2aQ=="));

    return new Promise((resolve, reject) => {
      var data = {
        nome_usuario: nome_usuario,
        senha: senha
      };
      
      this.http.post(this.API_URL + 'gestor/consultas', data, { headers: headers })
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }

  teste(){
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa("daniel:ZGExMjM0NTZ2aQ=="));

    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'gestor/consultas',{ headers: headers })
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }
}
