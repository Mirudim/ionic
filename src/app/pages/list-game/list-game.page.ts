import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Game } from '../../model/game';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.page.html',
  styleUrls: ['./list-game.page.scss'],
})
export class ListGamePage implements OnInit {

  protected games: any;

  constructor(
    protected gameService:GameService,
    private router: Router,
    protected alertController: AlertController

  ) { }

  ngOnInit() {
    this.gameService.getAll().subscribe(
    res=>{
      this.games = res;
    }
  )
  
}
editar(game) {
  this.router.navigate(['/tabs/addGame/', game.key])
}

async doRefresh(event) {
  //console.log('Begin async operation');
  this.gameService.getAll().subscribe(
    res => {
      this.games = res;
      setTimeout(() => {
        //console.log('Async operation has ended');
        event.target.complete();
      }, 500);
    }
  );
}

refreshGames() {
  this.gameService.getAll().subscribe(
    res => {
      this.games = res;
    }
  )
}

async presentAlert(tipo: string, texto: string) {
  const alert = await this.alertController.create({
    header: tipo,
    //subHeader: 'Subtitle',
    message: texto,
    buttons: ['OK']
  });
  await alert.present();
}


async apagar(game) {
  const alert = await this.alertController.create({
    header: 'Apagar dados!',
    message: 'Apagar todos os dados do Game',
    buttons: [
      {
        text: 'Não',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Sim',
        handler: () => {
          this.gameService.remove(game).then(
            res => {
              this.presentAlert("Aviso", "Apagado com sucesso!");
              this.refreshGames();
            },
            erro => {
              this.presentAlert("Erro", "Ao apagar o item!");
            }
          )
        }
      }
    ]
  });
  
  await alert.present();
}

}
