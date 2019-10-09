import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'list-jogador', loadChildren: './pages/list-jogador/list-jogador.module#ListJogadorPageModule' },
  { path: 'perfil-jogador', loadChildren: './pages/perfil-jogador/perfil-jogador.module#PerfilJogadorPageModule' },
  // { path: 'pages', loadChildren: './add-login/pages/pages.module#PagesPageModule' },
  // { path: 'add-login', loadChildren: './pages/add-login/add-login.module#AddLoginPageModule' },
  // { path: 'perfil-game', loadChildren: './perfil-game/perfil-game.module#PerfilGamePageModule' },
  //{ path: 'pages', loadChildren: './perfil-game/pages/pages.module#PagesPageModule' },
  //{ path: 'perfil-game', loadChildren: './pages/perfil-game/perfil-game.module#PerfilGamePageModule' },
  //{ path: 'pages', loadChildren: './list-game/pages/pages.module#PagesPageModule' },
  //{ path: 'list-game', loadChildren: './pages/list-game/list-game.module#ListGamePageModule' },
  //{ path: 'add-game', loadChildren: './pages/add-game/add-game.module#AddGamePageModule' },
  // { path: 'add-jogador', loadChildren: './pages/add-jogador/add-jogador.module#AddJogadorPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
