import { Component } from '@angular/core';
import { AplicacaoService } from '../aplicacao.service';
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

  constructor(private aplicacaoService: AplicacaoService, private session: SessionService, private router: Router){}
  public AdminDados = []
  public homePage = [];
  public home2Page = [];
  ngOnInit() {
    this.session.get()
      .then(res => {
        if (res) {
          if(res.admin){
            this.session.getAdmin().then(resA => { });
          }
          this.session.getAnimal()
          .then(resAn => { 
            console.log(resAn);
            this.home2Page = [
              {
                nome: resAn.nome,
              },
            ];
            this.session.getConsulta()
            .then(resC => {
              console.log(resC);
              this.homePage = [
                {
                  data_hora: resC.data_hora,
                },
              ];

            });
          });
        }
        
        else {
          this.router.navigate(['/login']);
        }

      });
  }
}
