import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-usuarers',
  templateUrl: './usuarers.page.html',
  styleUrls: ['./usuarers.page.scss'],
})
export class UsuarersPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  RouterAddUser(){
    if(this.authService.checkLogin === true){
      this.router.navigate(['/adduser'])
    }
  }
}
