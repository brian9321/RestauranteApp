import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {

  constructor(
    private router: Router,
    public localService: LocalService
  ) { }

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  ngOnInit() {
  }

  RoteRestInfo(){
    this.router.navigate(['/restauranteinfo']);
  }

  RoteFood(){
    this.router.navigate(['/food']);
  }

  RotePlatillos(){
    this.router.navigate(['/platillos']);
  }

}
