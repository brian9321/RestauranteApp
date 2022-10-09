import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadolistPageRoutingModule } from './estadolist-routing.module';

import { EstadolistPage } from './estadolist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadolistPageRoutingModule
  ],
  declarations: [EstadolistPage]
})
export class EstadolistPageModule {}
