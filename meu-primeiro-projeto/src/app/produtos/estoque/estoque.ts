import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
  produtos = [
    { nome: 'Notebook', preco: 3500, estoque: 5 },
    { nome: 'Teclado', preco: 150, estoque: 0 },
    { nome: 'Monitor', preco: 1200, estoque: 3 },
    { nome: 'Suporte', preco: 300, estoque: 0 }
  ];

  precoValor = 0;

  aumentarPreco() {
    this
  }

  diminuirPreco() {
    this
  }


}
