import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class Fire {

  user: any = {};

  constructor() {
    let config = {
      apiKey: "AIzaSyC26WloxtLdQlRP1S8jCRXrEtmfq0MmGQU",
      authDomain: "testfordraws.firebaseapp.com",
      databaseURL: "https://testfordraws.firebaseio.com",
      storageBucket: "testfordraws.appspot.com",
      messagingSenderId: "669152505578"
    };
    firebase.initializeApp(config);
  }

  login(nickUser, successCallback, errorCallback) : void {
    firebase.auth().signInAnonymously()
            .then(() => {
              firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                  this.setUser(nickUser, user.uid, user.isAnonymous);
                  successCallback();
                }
                else errorCallback('Error in onAuthStateChanged');
              });
            })
            .catch((err) => {
              console.log("Sing Error: ", err);
              errorCallback(err.message);
            });
  }

  private setUser(nickUser, uid, isAnonymous) : void {
    this.user.nickUser = nickUser;
    this.user.uid = uid;
    this.user.isAnonymous = isAnonymous;
    console.log(this.user);
    this.save();
  }

  private save() : void {
    firebase.database().ref('temp').child(this.user.uid).push().set({
      nick: this.user.nickUser,
      isAnonymous: this.user.isAnonymous
    });
    alert("Usuário alvo");
  }

}
