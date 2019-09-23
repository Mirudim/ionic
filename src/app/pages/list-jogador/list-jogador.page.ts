import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../../services/jogador.service'


@Component({
  selector: 'app-list-jogador',
  templateUrl: './list-jogador.page.html',
  styleUrls: ['./list-jogador.page.scss'],
})
export class ListJogadorPage implements OnInit {
  protected jogadores: any

  constructor(
    protected jogadorService: JogadorService
  ) { }

  ngOnInit() {
    this.jogadores = this.jogadorService.getAll();
  }

}
