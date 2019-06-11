import { Component, OnInit } from '@angular/core';
import { AplicacaoService } from '../aplicacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-gestor',
  templateUrl: './home-gestor.page.html',
  styleUrls: ['./home-gestor.page.scss'],
})
export class HomeGestorPage implements OnInit {
  homePage;
  home2Page;
  constructor(public aplicacao : AplicacaoService, public router: Router) { }

  ngOnInit() {
    this.aplicacao.buscarConsulta().then( ret => {
      this.homePage = ret;
    });
  }
  efetuarConsulta(){
    this.router.navigate(['/efetuar-consulta']);
  }

}
