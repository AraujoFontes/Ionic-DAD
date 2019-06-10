import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AplicacaoService } from '../aplicacao.service';
import { ValidationService } from '../validation.service';
@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.page.html',
  styleUrls: ['./nova-conta.page.scss'],
})
export class NovaContaPage implements OnInit {
  dados = {
    nome_usuario: "",
    senha: "",
    nome:"",
    sobrenome:"",
    cpf:"",
    data_nascimento:"",
    email:"",
    qtdanimais:0,
    logradouro:"",
    bairro:"",
    cidade:"",
    estado:"",
    numero:"",
    cep:"",
  }
  nome_usuario: string;
  senha: string;
  nome:string;
  sobrenome:string;
  cpf:string;
  data_nascimento:string;
  email:string;
  qtdanimais:0;
  logradouro:string;
  bairro:string;
  cidade:string;
  estado:string;
  numero:string;
  cep:string;

  constructor(public aplicacao: AplicacaoService, public alert: AlertController
    , public router: Router, public validation : ValidationService) { }
  
  ngOnInit() {
  }
  criarConta(){
    this.dados = {
      nome_usuario: this.nome_usuario,
      senha: this.senha,
      nome:this.nome,
      sobrenome:this.sobrenome,
      cpf:this.cpf,
      data_nascimento:this.data_nascimento,
      email:this.email,
      qtdanimais:0,
      logradouro:this.logradouro,
      bairro:this.bairro,
      cidade:this.cidade,
      estado:this.estado,
      numero:this.numero,
      cep:this.cep,
    }
    if(this.validation.validatorUsuario(this.dados)){
      this.aplicacao.criarConta(this.dados)
      .then((result:any) => {
        if(result.code == 200){
          this.presentAlert();
        }
        else{
          this.erroAlert();
        }
      });
    }
    else{
      this.erroVazioAlert();
    }
  }
  async presentAlert() {
    const alerts = await this.alert.create({
      header: 'Usuario Cadastrado !',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alerts.present();
  }
  async erroAlert() {
    const alerts = await this.alert.create({
      header: 'Erro ao Cadastrar Usuario',
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
      header: 'Erro no Formulário',
      message: 'Favor preencher corretamente o Formulário, provavelmente contém campos vazios.',
      buttons: [
        {
          text: 'OK',
        }
      ]
    });
    await alerts.present();
  }
}
