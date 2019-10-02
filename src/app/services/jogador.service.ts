import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Jogador } from '../model/jogador';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(
    protected fire:AngularFirestore
  ) { }

  save(jogador){
    return this.fire.collection("jogadores")
    .add({
      nome: jogador.nome,
      nickname: jogador.nickname,
      email: jogador.email,
      pws: jogador.pws,
      foto: jogador.foto,
      ativo:true
    });
  }

  getAll(){
    return this.fire.collection("jogadores").snapshotChanges()
    .pipe(
      map(dados => 
        dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc .data() }))
      )
    )
  }

  get(id){
    return this.fire.collection("jogadores").doc<Jogador>(id).valueChanges();
  }

update(jogador, id){
  return this.fire.collection("jogadores").doc<Jogador>(id).update(jogador);

  }

  remove(jogador){
    return this.fire.collection("jogadores").doc(jogador.key).delete();
  }
}
