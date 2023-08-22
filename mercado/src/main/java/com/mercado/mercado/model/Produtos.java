package com.mercado.mercado.model;

import com.mercado.mercado.model.dto.ProdutosDTO;
import lombok.*;

import jakarta.persistence.*;

@Table(name = "produtos")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Produtos {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descricao")
    private String descricao;

    public ProdutosDTO toDTO() {
        return ProdutosDTO.builder()
                .id(id)
                .titulo(titulo)
                .descricao(descricao)
                .build();
    }
}
