import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(environment.IONIC_CHANNEL);
  }

}
