import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilJogadorPage } from './perfil-jogador.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilJogadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilJogadorPage]
})
export class PerfilJogadorPageModule {}
