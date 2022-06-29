// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCw1PS7dbK52_j3AW8dujNLNCtqRQtTLRw",
    authDomain: "greentrail-416ed.firebaseapp.com",
    databaseURL: "https://greentrail-416ed-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "greentrail-416ed",
    storageBucket: "greentrail-416ed.appspot.com",
    messagingSenderId: "1076339141215",
    appId: "1:1076339141215:web:1331a171d3fe2f051909ea",
    measurementId: "G-RWCYD1W076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
