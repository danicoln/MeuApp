import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar'
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RoutingModule } from './rotas/routing/routing.module';


import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DespesasComponent } from './despesas/despesas.component';
import { AddTransacaoComponent } from './add-transacao/add-transacao.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DespesasComponent,
    AddTransacaoComponent,
  ],

  exports:[
    AddTransacaoComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    CalendarModule,
    FormsModule,
    RoutingModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
