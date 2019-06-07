import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
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
  {
    path: 'logout',
    component: LogoutComponent
  },
  { path: 'animal', loadChildren: './animal/animal.module#AnimalPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
