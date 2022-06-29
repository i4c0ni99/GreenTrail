import {Component} from '@angular/core';
import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';
import {Router, NavigationExtras} from '@angular/router';
import{HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router, private httpClient : HttpClient) {
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
    this.checkLoggedIn();
    const user = await GoogleAuth.signIn();
    this.httpClient.put("https://greentrail-416ed-default-rtdb.europe-west1.firebasedatabase.app/uteni",user);
    this.goToHome(user);
  }

  goToHome(user) {
   const navigationExtras: NavigationExtras = {state: {user}};
   this.router.navigate(['home']);
  }


}
