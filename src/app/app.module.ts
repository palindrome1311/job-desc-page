import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTabsModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, MatTabsModule, MatButtonModule, MatToolbarModule, MatCardModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
