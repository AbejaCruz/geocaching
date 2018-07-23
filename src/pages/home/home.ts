import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any = [
    {nombre: 'Lugar 1', direccion:'Direccion 1', categoria: 'Categoria 1'},
    {nombre: 'Lugar 2', direccion:'Direccion 2', categoria: 'Categoria 2'},
    {nombre: 'Lugar 3', direccion:'Direccion 3', categoria: 'Categoria 3'}


  ];

  constructor(public navCtrl: NavController) {

  }
  navegarALugar(name) { 
    this.navCtrl.push(LugarPage, {nombre: name});
   }
   irAVistaDeDetalle(){
     alert('Esta Funcionando');
   }

}
