import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';
import { Platillo } from '../../interfaces/food';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.page.html',
  styleUrls: ['./platillos.page.scss'],
})
export class PlatillosPage implements OnInit {

  verdato = false;
  platillo: Platillo = {nombreplatillo: 'PLATILLLO NUEVO'};

  constructor(
    private router: Router,
    public localService: LocalService
  ) { }

  ngOnInit() {
    //this.platillo.nombreplatillo = 'PLATILLLO NUEVO';
  }

  RoteRestInfo(){
    this.router.navigate(['/restauranteinfo']);
  }

  addPlatillo(){
   
    this.localService.setPlatillo(this.platillo);
  }

  RoteFood(){
    this.router.navigate(['/food']);
  }

}
