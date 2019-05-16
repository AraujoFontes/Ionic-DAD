import { Component } from '@angular/core';
import { AplicacaoService } from '../aplicacao.service';
// import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private aplicacaoService: AplicacaoService){}
  teste() {
    this.aplicacaoService.teste()
      .then((result: any) => {
        console.log(result);
      })
      .catch((error: any) => {
      });
  }
}
