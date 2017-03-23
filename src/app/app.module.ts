import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ReactMfComponent }  from './react-mf.component';
import { ReactOclComponent }  from './react-ocl.component';
import { ReactOclEditorComponent }  from './react-ocl-editor.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ReactMfComponent, ReactOclComponent, ReactOclEditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
