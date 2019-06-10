import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { Storage } from "@ionic/storage";
import { SessionService } from './session.service';
import { Usuario } from './models/usuario';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  public appPages = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public session: SessionService,
    public storage: Storage,
    public router: Router,
    ) {}
    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
    ngOnInit() {
      this.session.get()
      .then(res => {
        if(res){
          if(res.admin){
            this.appPages = [
              {
                title: 'Home',
                url: '/home',
                icon: 'home'
              },
              {
                title: 'Marcar Consulta',
                url: '/consulta',
                icon: 'clock'
              },
              {
                title: 'Efetuar Consulta',
                url: '/efetuar-consulta',
                icon: 'checkbox-outline'
              },
              {
                title: 'Relatório de Consulta',
                url: '/relatorio',
                icon: 'analytics'
              },
              {
                title: 'Cadastrar Gestor',
                url: '/gestor',
                icon: 'person-add'
              },
              {
                title: 'Sair',
                url: '/logout',
                icon: 'log-out'
              },
            ]
          }
          else{
            this.appPages = [
              {
                title: 'Home',
                url: '/home',
                icon: 'home'
              },
              {
                title: 'Marcar Consulta',
                url: '/consulta',
                icon: 'clock'
              },
              {
                title: 'Sair',
                url: '/logout',
                icon: 'log-out'
              },
            ]
          }
        }
        this.initializeApp();
        
      });
      
      
    }
  }
  