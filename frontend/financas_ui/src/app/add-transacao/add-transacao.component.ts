import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Transacao } from '../models/transacao.model';

@Component({
  selector: 'app-add-transacao',
  templateUrl: './add-transacao.component.html',
  styleUrls: ['./add-transacao.component.css']
})

export class AddTransacaoComponent {

  constructor(private transacaoService: TransactionService, private router: Router){}

  adicionarTransacao(form: NgForm){
    const id = null; // O id será gerado pelo backend
    const descricao = form.value.descricao;
    const valor = form.value.valor;
    const data = form.value.data;
    const novaTransacao = new Transacao(descricao, valor, data);
    this.transacaoService.adicionarTransacao(novaTransacao);
    this.router.navigate(['/']);
  }


}
