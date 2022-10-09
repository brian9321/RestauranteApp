import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Userlocal } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  barraVisible = false;

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  ionViewWillEnter(){
    this.ComprobarLogin();
  }

  async ComprobarLogin(){
    this.barraVisible = await this.authService.checkLogin;
    console.log(await this.authService.checkLogin);
  }

  async salir(){
    await this.authService.deleteUser();
    this.barraVisible = false;
  }

  RoteMenu(){
    this.router.navigate(['/restaurante']);
  }

  RoteLogin(){
    if(this.barraVisible === false){
      this.router.navigate(['/login']);
    }
  }

  RoteAddRest(){
    this.router.navigate(['/addrestaurante']);
  }

  RoteMenuApp(){
    this.router.navigate(['/menu']);
  }

}
