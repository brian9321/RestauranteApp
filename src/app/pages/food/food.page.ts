import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  constructor(
    public localService: LocalService
  ) {

   }

  ngOnInit() {
  }

}
