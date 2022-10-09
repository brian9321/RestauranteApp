import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionregisterPageRoutingModule } from './informacionregister-routing.module';

import { InformacionregisterPage } from './informacionregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionregisterPageRoutingModule
  ],
  declarations: [InformacionregisterPage]
})
export class InformacionregisterPageModule {}
