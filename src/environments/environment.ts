// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyCw1PS7dbK52_j3AW8dujNLNCtqRQtTLRw',
    authDomain: 'greentrail-416ed.firebaseapp.com',
    databaseURL: 'https://greentrail-416ed-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'greentrail-416ed',
    storageBucket: 'greentrail-416ed.appspot.com',
    messagingSenderId: '1076339141215',
    appId: '1:1076339141215:web:e53718e0be044c1f1909ea',
    measurementId: 'G-SJF1ZLM914'
  }
};
  /*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
