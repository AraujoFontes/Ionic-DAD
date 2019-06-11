import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session.service';
import { AplicacaoService } from '../aplicacao.service';
import { Usuario } from '../models/usuario';
import { Admin  } from '../models/admin';
import { Animal  } from '../models/animal';
import { Consulta  } from '../models/consulta';
import { ValidationService  } from '../validation.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  usuario: Usuario;
  admin: Admin;
  animal: Animal;
  consulta: Consulta;
  user: string;
  password: string;

  constructor(public session: SessionService, public aplicacao: AplicacaoService, 
    public router: Router, public validation: ValidationService, public alert : AlertController) {  }
  ngOnInit() {
  }
  loginUser(){

    if(this.validation.validationLogin(this.user, this.password)){
      this.aplicacao.login(this.user, this.password)
      .then((result:any) => {
        if(result.code == 200){
          this.usuario = {
            nome_usuario: result.dados.nome_usuario,
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
              result.dados.animal.forEach(childObj=> {
                console.log(childObj);
                this.animal = {
                  nome: childObj.nome,
                  historico: childObj.historico,
                  data_nascimento: childObj.data_nascimento,
                  id: childObj.id,
                }
                this.session.createAnimal(this.animal);
             })
            
          }
          if (result.dados.consulta) {
            this.consulta = {
              status: result.dados.consulta.status,
              observacoes: result.dados.consulta.observacoes,
              data_hora: result.dados.consulta.data_hora,
              nome_admin: result.dados.consulta.admin,
            }
            this.session.createConsulta(this.consulta);
          }
          this.session.create(this.usuario);
          if(result.dados.admin){
            location.href = '/home-gestor';
          }
          else{
            location.href = '/home';
          }
        }
        else{
          this.nEncontradoAlert(result.message);
        }
        
      })
      .catch((error: any) => {
        console.log(error);
      });
    }
    else{
      this.erroVazioAlert();
    }
  }
  async nEncontradoAlert(message) {
    const alerts = await this.alert.create({
      header: message,
      buttons: [
        {
          text: 'OK',
        }
      ]
    });
    await alerts.present();
  }
  async erroVazioAlert() {
    const alerts = await this.alert.create({
      header: 'Campos Vazios',
      message: 'Favor preencher corretamente o Formulário',
      buttons: [
        {
          text: 'OK',
        }
      ]
    });
    await alerts.present();
  }
}
