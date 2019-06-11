import { Component, OnInit } from '@angular/core';
import { AplicacaoService } from '../aplicacao.service';
import { ValidationService } from '../validation.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {
  nome: string;
  historico: string;
  data_nascimento: string;
  dados ={
    nome: '',
    historico: '',
    data_nascimento: '',
    nome_usuario: ''
  }
  constructor(public aplicacao: AplicacaoService, public validation: ValidationService, 
    public session: SessionService, public router: Router, public alert: AlertController) { }
  
  ngOnInit() {
    
  }
  cadastrarAnimal(){
    this.session.get().then(res => {
      this.dados ={
        nome: this.nome,
        historico: this.historico,
        data_nascimento: this.data_nascimento,
        nome_usuario: res.nome_usuario
      }
      if(this.validation.validationCadastroAnimal(this.dados)){
        this.aplicacao.cadastrarAnimal(this.dados).then(resC => {
          if(resC.code == 200){
            this.session.createAnimal(resC.dados);
            location.href='/home';
          }
          else{
            this.erroCadastro(resC.message);
          }
        });
      }
      else{
        this.alertaAnimal();
      }
    });
  }

  async alertaAnimal() {
    const alerts = await this.alert.create({
      header: 'Erro de Formulário',
      message: 'Existem campos vazios para cadastro animal',
      buttons: [
        {
          text: 'OK',
        }
      ]
    });
    await alerts.present();
  }
  async erroCadastro(message) {
    const alerts = await this.alert.create({
      header: 'Cadastro de Animal',
      message: message,
      buttons: [
        {
          text: 'OK',
        }
      ]
    });
    await alerts.present();
  }
}
