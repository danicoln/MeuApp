export class Transacao {
  id: number = 0;
  descricao: string = '';
  valor: number = 0;
  data: Date = new Date();

  constructor(descricao: string, valor: number, data: Date ){
    this.id;
    this.descricao = descricao;
    this.valor = valor;
    this.data = data;
  }
}
