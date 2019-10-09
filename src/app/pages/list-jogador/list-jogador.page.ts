import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../../services/jogador.service'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Jogador } from '../../model/jogador';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-jogador.page.html',
  styleUrls: ['./list-jogador.page.scss'],
})
export class ListJogadorPage implements OnInit {

  protected jogadores: any;

  constructor(
    protected jogadorService: JogadorService,
    private router: Router,
    protected alertController: AlertController
  ) { }

  ngOnInit() {
    this.refreshJogadores();
  }

   editar(jogador) {
    this.router.navigate(['/tabs/addJogador/', jogador.key])
  }

  async doRefresh(event) {
    //console.log('Begin async operation');
    this.jogadorService.getAll().subscribe(
      res => {
        this.jogadores = res;
        setTimeout(() => {
          //console.log('Async operation has ended');
          event.target.complete();
        }, 500);
      }
    );
  }

  refreshJogadores() {
    this.jogadorService.getAll().subscribe(
      res => {
        this.jogadores = res;
      }
    )
  }

  //Alerts-------------------
  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }

  async apagar(jogador) {
    const alert = await this.alertController.create({
      header: 'Apagar dados!',
      message: 'Apagar todos os dados do Jogador',
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
            this.jogadorService.remove(Jogador).then(
              res => {
                this.presentAlert("Aviso", "Apagado com sucesso!");
                this.refreshJogadores();
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
