import { Component } from '@angular/core';
import { Produto } from '../modelo/produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrls: ['./tabela.css']
})
export class Tabela {
  dados: Produto[] = [
    { nome: 'Coca-Cola', quantidade: 10 },
    { nome: 'Pepsi', quantidade: 5 },
    { nome: 'Fanta', quantidade: 8 }
  ];

  displayedColumns: string[] = ['nome', 'quantidade'];
}