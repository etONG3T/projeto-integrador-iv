import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  conteudo = false;

  mostrarOcultar() {
    this.conteudo = !this.conteudo;
  }

  listaItens = [
    { id: '001', nome: 'Gabriel', ativo: true },
    { id: '002', nome: 'Volpe', ativo: false },
    { id: '003', nome: 'Luiz', ativo: true },
    { id: '004', nome: 'Possarle', ativo: false }
  ];

  tamanhoFonte = 15;

  aumentarFonte() {
    this.tamanhoFonte = this.tamanhoFonte + 1;
  }

  diminuirFonte() {
    this.tamanhoFonte = this.tamanhoFonte - 1;
  }
}