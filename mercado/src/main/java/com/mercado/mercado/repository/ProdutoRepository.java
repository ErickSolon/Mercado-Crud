package com.mercado.mercado.repository;

import com.mercado.mercado.model.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produtos, Long> {
}
