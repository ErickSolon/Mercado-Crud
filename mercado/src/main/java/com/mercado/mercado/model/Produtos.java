package com.mercado.mercado.model;

import com.mercado.mercado.model.dto.ProdutosDTO;
import lombok.*;

import jakarta.persistence.*;

@Table(name = "HTE_PRODUTOS")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Produtos {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "produto_seq")
    @SequenceGenerator(name = "produto_seq", sequenceName = "seq_produto", allocationSize = 1)
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
