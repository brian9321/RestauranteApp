import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {

  token;

  user = {
    idrol: null,
    nombres: null,
    apellidos: null,
    correo: null,
    contrasena: null,
    foto: null,
    telefono: null,
    celular: null,
    
  };
  constructor(
    public authService: AuthService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    
  }


  async crearUusario(){
    this.usuarioService.crear(this.authService.tokenlocal, this.user)
    .subscribe((res:any) => {
      console.log(res);
      if(res.code === 200){

      } else {
        
      }
    });
  }

}
