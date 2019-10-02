import { Component, OnInit } from '@angular/core';
import { Jogador } from '../../model/jogador';
import { JogadorService } from '../../services/jogador.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-jogador',
  templateUrl: './perfil-jogador.page.html',
  styleUrls: ['./perfil-jogador.page.scss'],
})
export class PerfilJogadorPage implements OnInit {

  protected jogador: Jogador = new Jogador;
  private id:string = null;

  constructor(
    protected jogadorService: JogadorService,
    protected activatedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    if (this.id){
      this.jogadorService.get(this.id).subscribe(
        res=>{
          this.jogador = res
        }
      )
    }
  }

}
