import { DespesasComponent } from './../despesas/despesas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    
  ],
})
export class EnvironmentsModule { }

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
}
