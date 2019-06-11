import { Component, OnInit } from '@angular/core';
import { AplicacaoService } from '../aplicacao.service';
import { ValidationService } from '../validation.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-gestor',
  templateUrl: './cadastrar-gestor.page.html',
  styleUrls: ['./cadastrar-gestor.page.scss'],
})
export class CadastrarGestorPage implements OnInit {
  userPage;
  usuario: string;
  crmv: Int32Array;
  matricula: Int32Array;
  constructor(public aplicacao: AplicacaoService, public validation: ValidationService,
    public alert: AlertController, public router: Router) { }
  
  ngOnInit() {
    this.aplicacao.buscarUsuarios().then(ret =>{
      this.userPage = ret.dados;
    });
  }
  cadastrarGestor(){
    if(this.validation.validationGestor(this.usuario, this.crmv, this.matricula)){
      var dados ={
        nome_usuario: this.usuario,
        crmv: this.crmv,
        matricula: this.matricula
      }
      this.aplicacao.cadastrarGestor(dados).then(ret => {
        this.alerta(ret.message);
      })
    }
  }
  async alerta(message) {
    const alerts = await this.alert.create({
      header: 'Cadastro de Gestor',
      subHeader: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/home-gestor']);
          }
        }
      ]
    });
    await alerts.present();
  }
}
