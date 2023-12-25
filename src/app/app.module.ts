import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//configuracion del locale de la app
import localEs from '@angular/common/locales/es';
import localFrCanada from '@angular/common/locales/fr-CA';

import {registerLocaleData} from '@angular/common';

registerLocaleData(localEs)
registerLocaleData(localFrCanada)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      //Pone en toda la aplicacion en español por defecto 
      provide: LOCALE_ID, useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
