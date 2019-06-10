import { Component, OnInit } from '@angular/core';
import { AplicacaoService } from '../aplicacao.service';
import { SessionService } from '../session.service';
import { ValidationService } from '../validation.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: 'consulta.page.html',
  styleUrls: ['consulta.page.scss']
})
export class ConsultaPage implements OnInit {
  animalPage=[];
  animal: Int16Array;
  horario: string;
  dados = {};
  constructor(public aplicacao: AplicacaoService, public session: SessionService, 
    public validation: ValidationService, public alert: AlertController, public router: Router) { }
    
    ngOnInit() {
      this.session.getConsulta().then(ret =>{
        if(ret){
          this.alertaJaContemConsulta();

        }
        else{
          this.session.getAnimal()
          .then(res => { 
            if(res){
              this.animalPage = [
                {
                  nome: res.nome,
                  id: res.id ? res.id : res.id_animal,
                },
              ];
            }
          })
        }
      });
      
    }
    marcar(){
      
      this.session.get().then(res => {
        this.dados ={
          animal: this.animal,
          data_hora: this.horario,
          observacoes: '',
          nome_usuario: res.nome_usuario
        }
        if(this.validation.validationCadastroConsulta(this.animal, this.horario)){
          this.aplicacao.cadastrarConsulta(this.dados).then(resC => {
            if(resC.code == 200){
              this.session.createConsulta(resC.dados);
              this.Cadastro(resC.message)
            }
            else{
              this.Cadastro(resC.message);
            }
          });
        }
        else{
          this.alertaAnimal();
        }
      });
    }

    async alertaJaContemConsulta() {
      const alerts = await this.alert.create({
        header: 'Consultas',
        message: 'Existem consultas em aberto',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigate(['/home']);
            }
          }
        ]
      });
      await alerts.present();
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
    
    async Cadastro(message) {
      const alerts = await this.alert.create({
        header: 'Cadastro de Consulta',
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
  