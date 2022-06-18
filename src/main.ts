import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// ADD enableProdMode(); BEFORE BOOTSTRAP


import { AppModule } from './app/app.module';



enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
