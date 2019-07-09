import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule}  from '@angular/fire/auth';

import {environment} from '../environments/environment';

import {AuthService} from './servicios/auth.service';
import {AuthGuard} from './guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoginComponent,
    PrivadoPageComponent,
    NotFoundPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
