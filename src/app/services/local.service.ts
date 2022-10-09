import { Injectable } from '@angular/core';
import { Platillo } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  platillos: Platillo[] = [];
  constructor() { }

  setPlatillo(platillo:Platillo){
    console.log(platillo.nombreplatillo);
    this.platillos.unshift(platillo);
    console.log('agregado');
  }

  getPlatillos(){
    return this.platillos;
  }

  getLength(){
    return this.platillos.length
  }
}
