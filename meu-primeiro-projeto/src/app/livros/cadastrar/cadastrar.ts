import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {

  nome = 'Gabriel';

  caminhoImagem = '/workspaces/projeto-integrador-iv/meu-primeiro-projeto/public/favicon.ico';

  dizerOi(){
    this.nome = "Alunos do 4°B";
  }

}
