import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game'
import { GameService } from '../../services/game.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.page.html',
  styleUrls: ['./add-game.page.scss'],
})
export class AddGamePage implements OnInit {

  protected game: Game = new Game; //modificador de visibilidade "protected" e "private"


  constructor(
    protected gameService:GameService,
    protected alertController: AlertController,
    public loadingController: LoadingController,
    protected router:Router
  ) { }

  ngOnInit() {
  }

  

  onsubmit(form){
    this.gameService.save(this.game).then(
      res=>{
        form.reset();
        this.game=new Game;
        //console.log("Cadastrado");
        this.presentAlert("Aviso", "Cadastro")
        this.router.navigate(['/tabs/listGame']);

      },
      erro=>{
        console.log("Erro: " + erro);
        this.presentAlert("Erro", "Não foi possível fazer o cadastro")

        
      }
    )
  }

  



  //Alertas ionic
  async presentAlert(tipo:string, texto:string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
    
    
  }
  
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}

