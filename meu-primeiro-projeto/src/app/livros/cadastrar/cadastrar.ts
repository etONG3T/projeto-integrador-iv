import { TestRequest } from '@angular/common/http/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {
    nome = 'Gabriel';

    caminhoImagem ='/workspaces/projeto-integrador-iv/meu-primeiro-projeto/public/favicon.ico';

    mostrarMensagem = false;

    listaItens = ['Maça', 'Banana', 'Laranja'];

    toggleMensagem() {
      this.mostrarMensagem = !this.mostrarMensagem;
      this.isDestaque = false;
      this.hasError = true;
    }

    dizerOi(){
      this.nome = 'Alunos do 4B';
    }

    isDestaque = true;
    hasError = false;

    corFundo = 'yellow';
    tamanhoFonte = '20px';


}