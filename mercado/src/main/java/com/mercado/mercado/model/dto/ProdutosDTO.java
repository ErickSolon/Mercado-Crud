package com.mercado.mercado.model.dto;

import com.mercado.mercado.model.Produtos;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProdutosDTO {
    public Long id;

    @NotBlank(message = "Digite o título")
    public String titulo;

    @NotBlank(message = "Digite a descrição")
    public String descricao;

    public Produtos toEntity() {
        return Produtos.builder()
                .id(id)
                .titulo(titulo)
                .descricao(descricao)
                .build();
    }
}
