import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restauranteinfo',
  templateUrl: './restauranteinfo.page.html',
  styleUrls: ['./restauranteinfo.page.scss'],
})
export class RestauranteinfoPage implements OnInit {

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };
  
  constructor() { }

  ngOnInit() {
  }

  

}
