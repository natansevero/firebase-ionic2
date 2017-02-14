import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';

import { Fire } from '../../util/fire';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private nick: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private fire: Fire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginAnonymous() : void {
    this.fire.login(this.nick, () => {
      this.navCtrl.push(HomePage, { nick: this.fire.user.nickUser } );
    }, err => {
      console.log(err);
      alert(err);
    })
  }

}
