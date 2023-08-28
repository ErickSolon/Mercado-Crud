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
  displayedColumns = ['id', 'titulo', 'descricao', 'action']

  constructor(private service: MercadoService) {
  }
  
  ngOnInit(): void {
    this.service.getAll().subscribe(mercados => {
      this.mercado = mercados;
    });
  }

  deleteProduto(id: string): void {
    this.service.deleteById(id).subscribe(
      () => {
        this.service.getAll().subscribe(mercados => {
      this.mercado = mercados;
    });
      },
    );
  }
}
