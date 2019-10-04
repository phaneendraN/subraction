import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ComputeComponent} from './app.component';

import {HelloComponent} from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ ComputeComponent, HelloComponent ],
  bootstrap:    [ ComputeComponent ]
})
export class AppModule { }
