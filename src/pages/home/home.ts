import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private nick: any;

  constructor(public navCtrl: NavController, private params: NavParams) {

  }

  ionViewDidLoad() {
    this.nick = this.params.get('nick') || { };
  }

}
