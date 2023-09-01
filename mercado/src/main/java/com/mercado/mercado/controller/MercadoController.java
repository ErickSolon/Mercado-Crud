package com.mercado.mercado.controller;

import com.mercado.mercado.model.dto.ProdutosDTO;
import com.mercado.mercado.service.ProdutoService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mercado/")
@RequiredArgsConstructor
@CrossOrigin
public class MercadoController {
    private final ProdutoService produtoService;

    @GetMapping
    public ResponseEntity<Page<ProdutosDTO>> getProdutos(@PageableDefault(page = 0, sort = {"titulo"}) Pageable pageable) {
        return ResponseEntity.ok(produtoService.findAll(pageable));
    }

    @GetMapping("{id}")
    public ResponseEntity<ProdutosDTO> getProdutoById(@PathVariable Long id) {
        return ResponseEntity.ok(produtoService.findProdutoById(id));
    }

    @PutMapping("{id}")
    public ResponseEntity<ProdutosDTO> updatePessoaFisicaById(@PathVariable Long id, @RequestBody ProdutosDTO produtoDTO) {
        return ResponseEntity.ok(produtoService.updateProdutoById(id, produtoDTO));
    }

    @PostMapping
    public ResponseEntity<ProdutosDTO> createPessoaFisica(@RequestBody ProdutosDTO produtoDTO) {
        return ResponseEntity.ok(produtoService.saveProduto(produtoDTO));
    }

    @DeleteMapping("{id}")
    public void deleteById(@PathVariable Long id) {
        produtoService.deleteProdutoById(id);
    }
}
