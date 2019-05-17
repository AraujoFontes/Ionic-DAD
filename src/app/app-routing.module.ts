import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'consulta',
    loadChildren: './consulta/consulta.module#ConsultaPageModule'
  },
  {
    path: 'efetuar-consulta',
    loadChildren: './consulta/efetuarConsulta.module#EfetuarConsultaPageModule'
  },
  {
    path: 'gerar-relatorio',
    loadChildren: './consulta/efetuarConsulta.module#EfetuarConsultaPageModule'
  },
  {
    path: 'consultas',
    loadChildren: './consulta/efetuarConsulta.module#EfetuarConsultaPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
