import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  by = 'By Applicafro';
  

  flashOn = false;
  c = 1;
  constructor(public navCtrl: NavController, private flashlight: Flashlight, private platform: Platform) {
  //  flashlight.available().then(av =>{
  //    if(av) {
  //      this.checkFlash();
  //    }
  //  })
    
  }


  turnOnOff() {
      this.flashlight.toggle();
      this.flashOn = !this.flashOn;
  }

 
}
