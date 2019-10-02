import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../../services/jogador.service'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-jogador',
  templateUrl: './list-jogador.page.html',
  styleUrls: ['./list-jogador.page.scss'],
})
export class ListJogadorPage implements OnInit {

protected jogadores: any;

  constructor(
    protected jogadorService:JogadorService,
    private router: Router,
    protected alertcontroller: AlertController
  ) { }

  ngOnInit() {
    this.refreshJogadores()
}


editar(jogador) {
  this.router.navigate(['/tabs/addjogador/' , jogador.key])
}

  RefreshJogadores(event){
      console.log('Begin async operation');
      this.jogadorService.getAll().subscribe(
       res=> {
         this.jogadores = res
        setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
      }, 0);
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

async presentAlert(tipo:string, texto:string) {
  const alert = await this.alertcontroller.create({
    header: tipo,
    //subHeader: 'Subtitle',
    message: texto,
    buttons: ['OK']
  });
  await alert.present();
  
}

async excluir(jogador) {
  const alert = await this.alertcontroller.create({
    header: 'Apagar dasos',
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
          this.jogadorService.remove(jogador).then(
            res=>{
              this.presentAlert("Aviso", "apagado com sucesso");
              this.refreshJogadores();
            },
        
            erro=>{
              this.presentAlert("Erro" , "Ao apagar o item");
            }
          )
                }
      }
    ]
  });
  await alert.present();
  }
}

