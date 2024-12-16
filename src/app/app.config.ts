import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  // providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
  providers: [provideRouter(routes), provideHttpClient(withFetch()),importProvidersFrom(BrowserModule),importProvidersFrom(BrowserAnimationsModule)]
};
//,provideHttpClient(withFetch())