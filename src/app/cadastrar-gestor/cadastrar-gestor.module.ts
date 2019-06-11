import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarGestorPage } from './cadastrar-gestor.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarGestorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarGestorPage]
})
export class CadastrarGestorPageModule {}
