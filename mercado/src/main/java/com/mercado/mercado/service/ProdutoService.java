package com.mercado.mercado.service;

import com.mercado.mercado.model.Produtos;
import com.mercado.mercado.model.dto.ProdutosDTO;
import com.mercado.mercado.repository.ProdutoRepository;
import com.mercado.mercado.exception.ProdutoNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProdutoService {
    private final ProdutoRepository produtoRepository;

    public List<ProdutosDTO> findAll() {
        return produtoRepository.findAll().stream().map(Produtos::toDTO).collect(Collectors.toList());
    }

    @SneakyThrows
    public ProdutosDTO findProdutoById(Long id) {
        return produtoRepository.findById(id).orElseThrow(() -> new ProdutoNotFoundException()).toDTO();
    }

    public ProdutosDTO saveProduto(ProdutosDTO produtosDTO) {
        return produtoRepository.save(produtosDTO.toEntity()).toDTO();
    }

    public ProdutosDTO updateProdutoById(Long id, ProdutosDTO produtosDTO) {
        findProdutoById(id);
        produtosDTO.id = id;
        return produtoRepository.save(produtosDTO.toEntity()).toDTO();
    }

    public void deleteProdutoById(Long id) {
        findProdutoById(id);
        produtoRepository.deleteById(id);
    }
}
