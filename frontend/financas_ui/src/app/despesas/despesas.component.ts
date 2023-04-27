import { Transacao } from './../models/transacao.model';
import { TransactionService } from './../services/transaction.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class DespesasComponent implements OnInit {

  transacoes: Transacao[] = [];

  constructor(private transactionService: TransactionService, private dataPipe: DatePipe) {}

  formatDate(data: string): string{
    return this.dataPipe.transform(data, 'dd/MM/yyyy')!;
  }

  ngOnInit(){
    this.transactionService.listarTransacoes().subscribe(transacoes =>{
      this.transacoes = transacoes;
    });
  }

  adicionarTransacao(id: number, valor: number, descricao: string, data: Date): void {
    const novaTransacao: Transacao = {
      id: id,
      valor: valor,
      descricao: descricao,
      data: data
    };
    this.transactionService.adicionarTransacao(novaTransacao).subscribe(() => {
      this.transactionService.listarTransacoes().subscribe(transactions => {
        this.transacoes = transactions;
      });
    });
  }

  excluirTransacao(indice: number){

    this.transactionService.excluirTransacao(indice);
    this.transacoes.splice(indice, 1);

  }

}
