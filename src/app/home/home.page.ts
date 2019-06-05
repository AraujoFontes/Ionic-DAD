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
  teste() {
    this.aplicacaoService.teste()
      .then((result: any) => {
        console.log(result);
      })
      .catch((error: any) => {
      });
  }
  ngOnInit() {

    this.session.get()
      .then(res => {

        if (res) {
          console.log(res);
        }
        else {
          this.router.navigate(['/login']);
        }

      });


  }
}
