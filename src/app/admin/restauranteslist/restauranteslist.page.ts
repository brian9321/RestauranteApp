import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restauranteslist',
  templateUrl: './restauranteslist.page.html',
  styleUrls: ['./restauranteslist.page.scss'],
})
export class RestauranteslistPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  RouterAddRestaurante(){
    this.router.navigate(['/addrestaurante']);
  }

}
