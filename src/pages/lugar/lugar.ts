import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerceraPage } from '../tercera/tercera';
import { HomePage } from '../home/home';
import { LugaresService } from '../../services/lugares.service';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
lugar: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public lugaresService:LugaresService) {
  this.lugar= navParams.get('lugar');
  }
  guardarLugar(){
    if(!this.lugar.id){
      this.lugar.id=Date.now();
    }
    alert('Lugar guardado con éxito');
    this.navCtrl.pop();
    this.lugaresService.createLugar(this.lugar);
    console.log(this.lugar);
  }
}
 
  /*ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }
  navigateBack() {
     this.navCtrl.pop(); 
    }
    navigateToThird(){
      this.navCtrl.push(TerceraPage);
    }*/
   
 
