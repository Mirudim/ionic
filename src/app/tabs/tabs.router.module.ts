import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'listJogador',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-jogador/list-jogador.module').then(m => m.ListJogadorPageModule)
          }
        ]
      },
      {
        path: 'perfilJogador/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-jogador/perfil-jogador.module').then(m => m.PerfilJogadorPageModule)
          }
        ]
      },
      {
        path: 'listGame',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-game/list-game.module').then(m => m.ListGamePageModule)
          }
        ]
      },

      {
        path: 'perfilGame/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-game/perfil-game.module').then(m => m.PerfilGamePageModule)
          }
        ]
      },

      {
        path: 'addjogador',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/add-jogador/add-jogador.module').then(m => m.AddJogadorPageModule)
              //loadChildren: '.../pages/add-jogador/add-jogador.module#AddJogadorPageModule'
          }
        ]
      },
      
      {
        path: 'addjogador/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/add-jogador/add-jogador.module').then(m => m.AddJogadorPageModule)
              //loadChildren: '.../pages/add-jogador/add-jogador.module#AddJogadorPageModule'
          }
        ]
      },


      {
        path: 'addgame',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/add-game/add-game.module').then(m => m.AddGamePageModule)
              //loadChildren: '.../pages/add-jogador/add-jogador.module#AddJogadorPageModule'
          }
        ]
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
