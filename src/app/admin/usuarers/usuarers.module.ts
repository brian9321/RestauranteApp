import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarersPageRoutingModule } from './usuarers-routing.module';

import { UsuarersPage } from './usuarers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarersPageRoutingModule
  ],
  declarations: [UsuarersPage]
})
export class UsuarersPageModule {}
