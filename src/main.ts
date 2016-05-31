import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HootpwaAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import {HTTP_PROVIDERS} from '@angular/http'

if (environment.production) {
  enableProdMode();
}

bootstrap(HootpwaAppComponent,[
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase('https://hoot-d1e1e.firebaseio.com/')
]);
