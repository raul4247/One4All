import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-agendamento',
  templateUrl: 'agendamento.html',
})
export class AgendamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendamentoPage');
  }

}
