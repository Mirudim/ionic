import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/model/jogador'
import { JogadorService } from '../../services/jogador.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-jogador',
  templateUrl: './add-jogador.page.html',
  styleUrls: ['./add-jogador.page.scss'],
  
})

export class AddJogadorPage implements OnInit {

  protected jogador: Jogador = new Jogador; //modificador de visibilidade "protected" e "private"

  constructor(
    protected jogadorService:JogadorService,
    protected alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  onsubmit(form){
    this.jogadorService.save(this.jogador).then(
      res=>{
        console.log("Cadastrado");
        this.presentAlert("Aviso", "Cadastro")
      },
      erro=>{
        console.log("Erro: " + erro);
        this.presentAlert("Erro", "Cadastro não confirmado")

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

}
