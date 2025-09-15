import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: false,
  templateUrl: './dados.html',
  styleUrl: './dados.css'
})
export class Dados {
  nome: string = 'Gabriel Hernandes';
  salario: number = 3500.00;

  mostrarSalario = true;

  exibir() {
    this.nome = 'Gabriel Hernandes';
    this.salario = 3500.00;
  }

  ocultar() {
    this.salario = 0;
  }
}
