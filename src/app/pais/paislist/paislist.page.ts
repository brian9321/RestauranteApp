import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paislist',
  templateUrl: './paislist.page.html',
  styleUrls: ['./paislist.page.scss'],
})
export class PaislistPage implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.authService.checklogin();
  }

  ngOnInit() {
  }

}
