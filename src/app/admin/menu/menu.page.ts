import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  
  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.authService.checklogin();
   }

  ngOnInit() 
  {
  }

  ionViewWillEnter(){
   
  }

  RouterUser(){
    if(this.authService.checkLogin === true){
      this.router.navigate(['/usuarers']);
    }
  }

  RouterRestaurantes(){
    if(this.authService.checkLogin === true){
      this.router.navigate(['/restauranteslist']);
    }
  }

  RouterPais(){
    if(this.authService.checkLogin === true){
      this.router.navigate(['/paislist']);
    }
  }
  
  RouterEstado(){
    if(this.authService.checkLogin === true){
      this.router.navigate(['/estadolist']);
    }
  }
  RouterCiudad(){
    if(this.authService.checkLogin === true){
      this.router.navigate(['/ciudadlist']);
    }
  }

  RouterCatgoria(){
    if(this.authService.checkLogin === true){
      this.router.navigate(['/categorialist']);
    }
  }

}
