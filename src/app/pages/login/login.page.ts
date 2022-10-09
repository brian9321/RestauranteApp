import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Userlocal } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading: any;
  user:Userlocal;
  token;
  errorMessage: any;

  UserLogin = {
    email: 'brayan932@gmail.com',
    password: 'holamundo',
    gethash: 'true'
  };

  constructor(
    private authService: AuthService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.comprobarlogin();
  }

  async comprobarlogin(){
    if(await this.authService.checkLogin === true){
      this.router.navigate(['/home']);
    }
  }
  async loginuser(){

    this.presentLoading('Espere..');
    const em =  this.UserLogin.email.trim();
    this.UserLogin.email = em;

    console.log(this.UserLogin);
    await this.authService.login(this.UserLogin)
    .subscribe( async (res: any) => {
      console.log(res);
      if(res <= 1){
        console.log(res);
        this.UserLogin.gethash = 'true';
        this.presentToast('Error en el servidor');
      } else {
          if (!res.status){
            this.user = res; /* obtiene el usuario */
            this.UserLogin.gethash = ''; /* vaciar gethash para obtener token */

            this.authService.login(this.UserLogin)
              .subscribe(usertoken => {
               
                this.token = usertoken; /* obtiene el token */
                
                if (this.token.length <= 0) {
                  this.presentToast('Error en el servidor');
                } else {
                  this.UserLogin.gethash = 'true';
                  this.loading.dismiss();
                  this.CrearSesion();
                  
                 // this.cargarData();
                  //this.router.navigate(['/menu']);
                }

              },
                error => {
                  this.errorMessage = <any>error;
                  if (this.errorMessage != null) {
                    this.loading.dismiss();
                    /*console.log(this.errorMessage);*/
                    this.UserLogin.gethash = 'true';
                    this.presentToast('Error en el servidor');
                  }
                }
              );

          }
      }
    }, error => {

    });
  }

  async CrearSesion(){
    await this.authService.setUser(this.user); /* almacenamiento local */
    await this.authService.setToken(this.token); /* almacenamiento local */
    await this.authService.checklogin();
    await this.comprobarlogin();
  }

  /** PRECENTS */
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      message: mensaje,
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
      mode: 'ios'
    });
    return this.loading.present();
  }
}
