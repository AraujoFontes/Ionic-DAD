import { Component } from '@angular/core';
import { AplicacaoService } from '../aplicacao.service';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../models/usuario';
import { Storage } from "@ionic/storage";
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id : Int16Array;
  constructor(private aplicacaoService: AplicacaoService, private session: SessionService,
    private router: Router, public alert: AlertController){}
    public AdminDados = []
    public homePage = [];
    public home2Page = [];
    
    ngOnInit() {
      this.session.getAdmin().then(res => {
        if(res){
          this.router.navigate(['/home-gestor'])
        }
      });
      this.session.get()
      .then(res => {
        if (res) {
          this.session.getAnimal()
          .then(resAn => { 
            if(resAn){
              this.home2Page = [
                {
                  nome: resAn.nome,
                  id: resAn.id ? resAn.id : resAn.id_animal,
                },
              ];
              this.session.getConsulta()
              .then(resC => {
                if(resC){ 
                  this.homePage = [
                    {
                      data_hora: resC.data_hora,
                    },
                  ];
                }
              });
            }
          });
        }
        else {
          this.router.navigate(['/login']);
        }
      });
    }
    cadastrarAnimal(){
      this.session.getAnimal().then(res=>{
        if(res){
          this.alertaAnimal();
        }
        else{
          this.router.navigate(['/cadastro-animal']);
        }
      });
      
    }
    async alertaAnimal() {
      const alerts = await this.alert.create({
        header: 'Você só pode ter um animal por conta',
        message: 'Em breve haverá mudanças sobre isso!',
        buttons: [
          {
            text: 'OK',
          }
        ]
      });
      await alerts.present();
    }
    async temCerteza(id) {
      const alerts = await this.alert.create({
        header: 'Exclusão de animal',
        message: 'Tem certeza que deseja excluir esse animal?',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.aplicacaoService.retirarAnimal(id)
              .then(ret => {
                if(ret){   
                  if(ret.code == 200){
                    this.session.getAnimal()
                    .then(resAn => { 
                      this.session.removeAnimal();
                    });
                  }
                  this.Alert(ret.message);
                }
              });
            }
          },
          {
            text: 'Cancelar'
          }
        ]
      });
      await alerts.present();
    }
    retirarAnimal(id){
      if(id !=undefined){
        this.temCerteza(id);
        
      }
      console.log(id);
    }
    marcarConsulta(){
      this.router.navigate(['/consulta']);
    }
    async Alert(message) {
      const alerts = await this.alert.create({
        header: 'Exclusão de Animal',
        message: message,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              location.reload();
            }
          }
        ]
      });
      await alerts.present();
    }
  }
  