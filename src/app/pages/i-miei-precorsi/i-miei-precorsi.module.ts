import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IMieiPrecorsiPageRoutingModule } from './i-miei-precorsi-routing.module';

import { IMieiPrecorsiPage } from './i-miei-precorsi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IMieiPrecorsiPageRoutingModule
  ],
  declarations: [IMieiPrecorsiPage]
})
export class IMieiPrecorsiPageModule {}
