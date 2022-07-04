import {Component} from '@angular/core';
import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';
import {Router, NavigationExtras} from '@angular/router';
import {Utente} from "../../model/user.model";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {LoadingController, AlertController} from '@ionic/angular';
import 'firebase/firestore';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";




@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    public createUserForm: FormGroup;



    constructor(private router: Router,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController,
                public fireStore:AngularFirestore,
    ) {


    }

    ionViewDidEnter() {
        GoogleAuth.initialize();
    }

    checkLoggedIn() {
        GoogleAuth.refresh().then((data) => {
            if (data.accessToken) {
                const navigationExtras: NavigationExtras = {
                    state: {
                        user: {type: 'existing', accessToken: data.accessToken, idToken: data.idToken}
                    }
                };
                this.router.navigate(['home'], navigationExtras);
            }
        }).catch(e => {
            if (e.type === 'userLoggedOut') {
                this.doLogin();
            }
        });
    }

    async doLogin() {

        const user = await GoogleAuth.signIn();
        const email =this.fireStore.collection('utenti').doc('email').get();
            console.log(this.fireStore.collection('utenti').doc('email').get());
        if(!this.fireStore.collection('utenti').doc('email').get()._isScalar){
            this.router.navigate(['sign-up'],{state: {email:user.email,surname:user.familyName,name:user.givenName}});

        }
        else
            this.router.navigate(['home'])
    }




}
