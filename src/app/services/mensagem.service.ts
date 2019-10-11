import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(
    private alertController:AlertController,
    protected loadingController: LoadingController
    
  ) { }

async presentAlert(tipo:string, texto:string) {
  const alert = await this.alertController.create({
    header: tipo,
    //subHeader: 'Subtitle',
    message: texto,
    buttons: ['OK']
  });
  await alert.present();
}
//loading...
async presentLoading() {
  await this.loadingController.create({
    message: 'Carregando...',
  //  duration: 2000
  }).then(
    res =>{
      res.present()
    }
  )
 
  }


  async dismissLoading(){
    await this.loadingController.dismiss();
  }
}