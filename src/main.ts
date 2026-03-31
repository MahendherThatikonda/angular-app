import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// works fine, just deprecated
platformBrowserDynamic().bootstrapModule(AppModule)