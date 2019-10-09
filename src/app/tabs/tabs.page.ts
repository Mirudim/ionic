import { Component } from '@angular/core';
import { JogadorService } from '../services/jogador.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  protected quantJogador:number = 0;
  constructor(
    protected jogadorService: JogadorService,
  ) {
    this.jogadorService.getAll().subscribe(
      res=>{
        this.quantJogador = res.length
      }
    )

  }

}
