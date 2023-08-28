import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mercado } from 'src/app/models/mercado.model';
import { MercadoService } from 'src/app/services/mercado.service';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {
  produto: Mercado = {
    titulo: "",
    descricao: ""
  };

  idProduto: string = "";
  
  constructor(private service: MercadoService, private activatedRoute: ActivatedRoute, private router: Router) {

  }
  
  ngOnInit(): void {
      this.idProduto = this.activatedRoute.snapshot.paramMap.get('id') || "";
      this.service.getById(this.idProduto).subscribe(
        produtoById => {
          this.produto = produtoById;
        },
      );
  }

  updateProduto() {
    this.service.updateById(this.idProduto, this.produto).subscribe(() => {
      this.router.navigate(["/estoque"]);
    })
  }
}
