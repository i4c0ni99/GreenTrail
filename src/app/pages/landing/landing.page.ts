import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  user: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      const data = this.router.getCurrentNavigation().extras.state;
      if (data) {
        if (data.user.type === 'existing') {
          const token = data.user.accessToken;
          this.getUserProfileData(token);
        }
        else {
          this.user = data.user;
        }
      }
    });
  }
  signOut() {
    GoogleAuth.signOut().then(() => {
      this.router.navigate(['home']);
    });
  }
  async getUserProfileData(token) {
    const options = {
      url: `https://www.googleapis.com/oauth2/v2/userinfo?key=AIzaSyAt-1dMOXeB4CoBl7WEFl6SxDfx46u4Nmc&oauth_token=${token}`,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers:{'Content-Type': 'application/json'}
    };
    const response = await Http.request({ ...options, method: 'GET' });
    this.user = response.data;
  }

}
