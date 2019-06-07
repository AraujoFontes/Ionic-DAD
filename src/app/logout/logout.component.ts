import { Component, OnInit } from '@angular/core';
import { AplicacaoService } from '../aplicacao.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  
  constructor(public aplicacao: AplicacaoService, public route: Router) { }
  
  ngOnInit() {
    this.aplicacao.logout();
    location.href = 'http://localhost:8100/login';
  }
}
