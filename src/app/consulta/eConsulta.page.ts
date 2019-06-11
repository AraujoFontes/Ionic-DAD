import { Component, OnInit } from '@angular/core';
import { AplicacaoService } from '../aplicacao.service';
import { ValidationService } from '../validation.service';
import { SessionService } from '../session.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-efetuarConsulta',
  templateUrl: 'efetuarConsulta.page.html',
  styleUrls: ['consulta.page.scss']
})
export class EfetuarConsultaPage implements OnInit {
  homePage;
  consulta: Int16Array;
  observacoes: string;
  constructor(public aplicacao : AplicacaoService, public validation: ValidationService, 
    public session: SessionService, public alert : AlertController){}
    ngOnInit() {
      this.aplicacao.buscarConsulta().then( ret => {
        this.homePage = ret;
      });
    }
    efetuarConsulta(){
      if(this.validation.validationEfetuar(this.consulta, this.observacoes)){
        this.session.get().then(ret => {
          var dados = {
            nome_usuario: ret.nome_usuario,
            id: this.consulta,
            observacoes: this.observacoes

          }
          this.aplicacao.efetuarConsultaPost(dados).then(res => {
            
            this.Alerta(res.message);
            
          });
        });
      }
      else{
        this.alertaForm();
      }
    }
    async Alerta(message) {
      const alerts = await this.alert.create({
        header: 'Consultas',
        message: message,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              location.href="/home-gestor"
            }
          }
        ]
      });
      await alerts.present();
    }
    async alertaForm() {
      const alerts = await this.alert.create({
        header: 'Erro no formulário',
        message: 'O formulário contém campos vazios.',
        buttons: [
          {
            text: 'OK',
          }
        ]
      });
      await alerts.present();
    }
  }
  