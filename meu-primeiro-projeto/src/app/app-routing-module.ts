import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
  },
  {
    path: 'contador',
    loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
  },
  {
    path: 'estrutura',
    loadChildren: () => import('./estrutura/estrutura-module').then(m => m.EstruturaModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos-module').then(m => m.ProdutosModule)
  },
  {
    path: 'imports',
    loadChildren: () => import('./imports/components').then(m => m.Components)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }