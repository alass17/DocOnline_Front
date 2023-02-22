import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupnotificatonComponent } from './popupnotificaton/popupnotificaton.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';

import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
@NgModule({
  declarations: [AppComponent,PopupnotificatonComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,
    HttpClientModule,ReactiveFormsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },httpInterceptorProviders,ImagePicker, 
    WebView,
    NativeGeocoder],
  bootstrap: [AppComponent],
})
export class AppModule {}
