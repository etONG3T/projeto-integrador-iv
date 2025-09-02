import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {

    produtos = [
      {nome: 'Notebook', preco: 3500, estoque: 3},
      {nome: 'Monitor', preco: 1000, estoque: 0},
      {nome: 'Teclado', preco: 300, estoque: 8},
      {nome: 'Mouse', preco: 200, estoque: 10},
      {nome: 'Mousepad', preco: 100, estoque: 0}
    ]

      aumentarPrecos(): void {
        this.produtos.forEach(produto => {
        produto.preco *= 1.10;
        });
      }

      diminuirPrecos(): void {
        this.produtos.forEach(produto => {
        produto.preco *= 0.90;
        });
      }
  }