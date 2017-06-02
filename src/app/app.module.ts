import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SlidePanelComponent } from './slide-panel';

@NgModule({
  imports     : [ BrowserModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, SlidePanelComponent ],
  bootstrap   : [ AppComponent ]
})
export class AppModule {}
