import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { lugares: any = []; constructor(public navCtrl: NavController, public lugaresService: LugaresService) { 
  this.lugaresService.getLugares().valueChanges() 
  .subscribe((lugaresFB) => {
     this.lugares = lugaresFB; 
    })
   }
  navegarALugar(name) { 
    this.navCtrl.push(LugarPage, {nombre: name});
   }
   irAVistaDeDetalle(){
     this.navCtrl.push(LugarPage,{lugar:{}});
   }
irAVistaDeDetalleExistente(lugar){
     this.navCtrl.push(LugarPage,{lugar:lugar});
}
deleteLugar(lugar){
  if(confirm('Seguro que desea borrar este lugar?')){
    return this.lugaresService.deleteLugar(lugar).then(()=>{
      alert('Lugar eliminado correctamente');
    });
  }
  }
 
}
