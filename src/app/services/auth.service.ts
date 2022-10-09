import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, XhrFactory } from '@angular/common/http';
import { Userlocal } from '../interfaces/user';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { EventsService } from './events.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url;
  authorization = '';
  usuario: Userlocal;
  tokenlocal = '';
  pagina = 0;

  checkLogin = false;

  user: Userlocal;
  token: any;

  private _storage: Storage | null = null;

  constructor(
    public http: HttpClient,
    private storage: Storage,
    public toastController: ToastController,
    public Events: EventsService,
    public router: Router
   ) { 
    this.init();
    this.checklogin();
   }


 login( jsuser: any ){
    const json = JSON.stringify( jsuser );
    const params = 'json=' + json;
    const headerss = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post(this.url + '/login' , params, {headers: headerss});
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }


  /* FUNCION PARA ALMACENAR EL TOKEN EN MEMORIA */
  async setToken(token) {
    if (!this.token) {
      this.token = token;
      await this.storage.set('token', this.token);
      this.checkLogin = true;
    }

  }

  /* FUNCION PARA ALMACENAR EL USUARIO EN MEMORIA */
  async setUser(user: Userlocal) {
    if (!this.user) {
      this.user = user;
      await this.storage.set('user', this.user);
      this.checkLogin = true;
    }
  }

  /* FUNCION PARA OBTENER EL TOKEN ALMACENADO EN MEMORIA */
  async getToken() {
    const token = await this.storage.get('token');
    return token;
  }

  /* FUNCION PARA OBTENER EL USUARIO ALMACENADO EN MEMORIA */
  async getUser() {
    const user = await this.storage.get('user');
    return user;
  }

  async deleteUser() {
    this.token = null;
    this.user = null;
    this.checkLogin = false;
    await this.storage.remove('token');
    await this.storage.remove('user');
    await this.storage.clear();
    this.loginEvent();
    /*if (this.platform.is('android') || this.platform.is('ios')) {
     
    } else {
      this.router.navigate(['/login']);
      
    }*/
    this.router.navigate(['/home']);
  }

  /* FUNCION PARA EL TOAST */
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }

  loginEvent() {
    this.Events.publishSomeData({
      login: false
    });
  }

  public async checklogin(){
    await this.getToken()
    .then( (token: any) => {
      if(token){
        this.checkLogin = true;
        if(!this.tokenlocal){
          this.tokenlocal = token;
        }
         this.getUser()
        .then( (user: Userlocal) => {
          if(user){
            if(!this.usuario){
              this.usuario = user;
            }          
            this.checkLogin = true;
          } else {
            this.deleteUser();
            this.checkLogin = false;
          }
        });
      } else {
        this.deleteUser();
        this.checkLogin = false;
      }
    });
  }
  
}
