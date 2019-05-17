import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
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
      title: 'Configurações',
      url: '/consulta',
      icon: 'settings'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
