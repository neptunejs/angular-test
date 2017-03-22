import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ReactMfComponent }  from './react-mf.component';
import { ReactOclComponent }  from './react-ocl.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ReactMfComponent, ReactOclComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
