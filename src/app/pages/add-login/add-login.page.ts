import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.page.html',
  styleUrls: ['./add-login.page.scss'],
})
export class AddLoginPage implements OnInit {

  protected email:string = "";
  protected pws:string = "";

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }
  
onsubmit(form){
  this.login();
}

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pws).then(
      res=>{
        console.log(res.user);
      },
      erro => {
        console.log("Erro: " + erro);
      }
    ).catch(erro=>{
      console.log("Erro no sistema " + erro)
    })
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
