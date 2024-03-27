import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localEs from "@angular/common/locales/es-EA";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule

],
  declarations: [AppComponent],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }

