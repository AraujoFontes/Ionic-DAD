import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { AplicacaoService } from '../aplicacao.service';
import { Usuario } from '../models/usuario';
import { Admin  } from '../models/admin';
import { Animal  } from '../models/animal';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  usuario: Usuario;
  admin: Admin;
  animal: Animal;
  user: string;
  password: string;
  constructor(public session: SessionService, public aplicacao: AplicacaoService, public router: Router) {  }
  ngOnInit() {
  }
  loginUser(){
    this.aplicacao.login(this.user, this.password)
    .then((result:any) => {
      if(result.code == 200){
        this.usuario = {
          nome: result.dados.nome,
          sobrenome: result.dados.sobrenome,
          cpf: result.dados.cpf,
          data_nascimento: result.dados.data_nascimento,
          email: result.dados.email,
          qtdanimais: result.dados.qtdanimais,
          logradouro: result.dados.logradouro,
          bairro: result.dados.bairro,
          cidade: result.dados.cidade,
          estado: result.dados.estado,
          numero: result.dados.numero,
          admin: result.dados.admin
        }
        if (result.dados.admin){
          this.admin = {
            CRMV: result.dados.adminDados[0].CRMV,
            matricula: result.dados.adminDados[0].matricula
          }
          this.session.createAdmin(this.admin);
        }
        if (result.dados.animal){
          this.animal = {
            nome: result.dados.animal.nome,
            historico: result.dados.historico,
            data_nascimento: result.dados.data_nascimento,
          }
          this.session.createAnimal(this.animal);
        }
        this.session.create(this.usuario);
        location.href = 'http://localhost:8100/home';
      }
      else{
        console.log(result)
      }
    })
    .catch((error: any) => {
      console.log(error);
    });

  }
}
