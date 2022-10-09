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
export class UsuarioService {

  url = environment.url;
  authorization = '';
  usuario: Userlocal;
  tokenlocal = '';
  pagina = 0;


  token: any;

  constructor(
    public http: HttpClient,
    private storage: Storage,
    public toastController: ToastController,
    public Events: EventsService,
    public router: Router
  ) { }

  crear(token: string, data: any) {

    const json = JSON.stringify(data);
    const params = 'json=' + json + '&authorization=' + token;
    const headerss = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post(this.url + '/usuario/insert', params, { headers: headerss });
  }
}
