import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mercado } from 'src/app/models/mercado.model';
import { MercadoService } from 'src/app/services/mercado.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  mercado: Mercado[] = [];
  totalItems = 0;
  currentPage = 1;
  produtosPerPage = 5;

  displayedColumns = ['id', 'titulo', 'descricao', 'action'];

  constructor(private service: MercadoService) {}

  ngOnInit(): void {
    this.fetchProdutos();
  }

  fetchProdutos(): void {
    this.service.getAll(this.currentPage, this.produtosPerPage).subscribe((data) => {
      this.mercado = data.content;
      this.totalItems = data.totalElements;
    });
  }

  deleteProduto(id: string): void {
    this.service.deleteById(id).subscribe(() => {
      this.fetchProdutos();
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.fetchProdutos();
  }
}
