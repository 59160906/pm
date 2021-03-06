import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeacherHomePage} from '../teacher-home/teacher-home'

/**
 * Generated class for the RegisterTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-t',
  templateUrl: 'register-t.html',
})
export class RegisterTPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterTPage');
  }

  goTeacher(){
    this.navCtrl.setRoot(TeacherHomePage);
  }
}
