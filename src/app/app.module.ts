import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosModule } from './heroes/heros.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HerosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
