import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments.module';
import { Transacao } from '../models/transacao.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listarTransacoes(): Observable<Transacao[]>{
    return this.http.get<Transacao[]>(`${this.apiUrl}/transacoes`)
  }

  buscarTransacao(id: number): Observable<Transacao>{
    return this.http.get<Transacao>(`${this.apiUrl}/transacoes/${id}`);
  }

  adicionarTransacao(transacao: Transacao): Observable<Transacao>{
    return this.http.post<Transacao>(`${this.apiUrl}/transacoes`, transacao);
  }

  atualizarTransacao(transacao: Transacao): Observable<Transacao>{
    return this.http.put<Transacao>(`${this.apiUrl}/transacoes/${transacao.id}`, transacao);
  }

  excluirTransacao(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/transacoes/${id}`);
  }

}

