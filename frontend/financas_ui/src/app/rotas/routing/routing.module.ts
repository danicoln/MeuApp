import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DespesasComponent } from 'src/app/despesas/despesas.component';
import { AddTransacaoComponent } from 'src/app/add-transacao/add-transacao.component';

const routes: Routes =[
  {path: '', redirectTo: '/transacoes', pathMatch: 'full'},
  {path: 'transacoes', component: DespesasComponent},
  {path: 'adicionar-transacao', component: AddTransacaoComponent},
  {path: '**', component: DespesasComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
