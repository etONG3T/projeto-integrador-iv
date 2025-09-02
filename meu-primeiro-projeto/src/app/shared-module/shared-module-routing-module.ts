import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotaoComponent } from './botao-component/botao-component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModuleRoutingModule { }