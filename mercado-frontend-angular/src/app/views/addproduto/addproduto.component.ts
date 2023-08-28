import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MercadoService } from 'src/app/services/mercado.service';
import { Mercado } from 'src/app/models/mercado.model';

@Component({
  selector: 'app-addproduto',
  templateUrl: './addproduto.component.html',
  styleUrls: ['./addproduto.component.css']
})
export class AddprodutoComponent implements OnInit {
  mercado: Mercado = {
    titulo: "",
    descricao: ""
  }

  constructor(private service: MercadoService, private route: Router) {

  }
  
  ngOnInit(): void {
      
  }

  createProduto(): void {
    this.service.create(this.mercado).subscribe(() => {
      this.route.navigate(["/estoque"]);
    });
  }
}
