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
    {id: '1', nome: 'Volpe', ativo: true},
    {id: '2', nome: 'Gabriel', ativo: false},
    {id: '3', nome: 'Luiz', ativo: true},
    {id: '4', nome: 'Maria Eloiza', ativo: false}
  ];

    tamanhoFonte = 15;

    aumentarFonte() {
      this.tamanhoFonte = this.tamanhoFonte + 1;
    }

    diminuirFonte(){
      this.tamanhoFonte = this.tamanhoFonte - 1;
    }
}