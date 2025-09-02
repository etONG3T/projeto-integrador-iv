import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos-component',
  standalone: false,
  templateUrl: './lista-produtos-component.html',
  styleUrl: './lista-produtos-component.css'
})
export class ListaProdutosComponent {
  listaProdutos: string[] = ['Produto 1', 'Produto 2', 'Produto 3'];
}