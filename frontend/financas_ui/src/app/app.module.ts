import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar'
import { DatePipe } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DespesasComponent } from './despesas/despesas.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DespesasComponent
  ],

  exports:[

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    CalendarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
