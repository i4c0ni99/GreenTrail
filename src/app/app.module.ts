import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import { AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {firebaseConfig} from '../environments/firebaseConfig';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    FormsModule,ReactiveFormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,TranslateModule.forRoot(),
    AngularFireAuthModule,AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule
    ],
  providers: [GooglePlus,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],

})







export class AppModule {
}
