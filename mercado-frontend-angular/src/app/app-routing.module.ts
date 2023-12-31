import { EstoqueComponent } from './views/estoque/estoque.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AddprodutoComponent } from './views/addproduto/addproduto.component';
import { UpdateProdutoComponent } from './views/update-produto/update-produto.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "estoque",
    component: EstoqueComponent
  },
  {
    path: "add",
    component: AddprodutoComponent
  },
  {
    path: "update/:id",
    component: UpdateProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
