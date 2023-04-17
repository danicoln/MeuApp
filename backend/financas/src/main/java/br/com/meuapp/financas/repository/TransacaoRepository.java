package br.com.meuapp.financas.repository;

import br.com.meuapp.financas.model.Transacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransacaoRepository extends JpaRepository<Transacao, Long> {
}
