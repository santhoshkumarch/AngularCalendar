import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalHomeComponent } from './cal-home.component';

@NgModule({
  declarations: [
    CalHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  bootstrap: [CalHomeComponent]
})
export class CalModule { }