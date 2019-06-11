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
    path: 'home-gestor',
    loadChildren: './home-gestor/home-gestor.module#HomeGestorPageModule'
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
    path: 'novo-gestor',
    loadChildren: './cadastrar-gestor/cadastrar-gestor.module#CadastrarGestorPageModule'
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
    path: 'criar-conta',
    loadChildren: './nova-conta/nova-conta.module#NovaContaPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  { path: 'cadastro-animal', loadChildren: './animal/animal.module#AnimalPageModule' },
  { path: 'nova-conta', loadChildren: './nova-conta/nova-conta.module#NovaContaPageModule' },
  { path: 'home-gestor', loadChildren: './home-gestor/home-gestor.module#HomeGestorPageModule' },
  { path: 'cadastrar-gestor', loadChildren: './cadastrar-gestor/cadastrar-gestor.module#CadastrarGestorPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
