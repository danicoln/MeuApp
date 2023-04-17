package br.com.meuapp.financas.controller;

import br.com.meuapp.financas.model.Transacao;
import br.com.meuapp.financas.repository.TransacaoRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/transacoes")
public class transacaoController {

    @Autowired
    private TransacaoRepository transacaoRepository;

    @GetMapping
    public List<Transacao> buscarTodasTransacoes(){
        return transacaoRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Transacao> buscarTransacaoPorId(@PathVariable Long id){
        Optional<Transacao> transacao = transacaoRepository.findById(id);
        if(transacao.isPresent()){
            return ResponseEntity.ok(transacao.get());
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Transacao criarTransacao(@RequestBody Transacao transacao){
        return transacaoRepository.save(transacao);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Transacao> atualizarTransacao(@PathVariable Long id, @RequestBody Transacao transacao){
        Optional<Transacao> optionalTransacao = transacaoRepository.findById(id);
        if(optionalTransacao.isPresent()){
            Transacao atualizarTransacao = optionalTransacao.get();
            atualizarTransacao.setData(transacao.getData());
            atualizarTransacao.setDescricao(transacao.getDescricao());
            atualizarTransacao.setValor(transacao.getValor());
            transacaoRepository.save(atualizarTransacao);
            return ResponseEntity.ok(atualizarTransacao);
        }else{
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerTransacao(@PathVariable Long id){
        Optional<Transacao> optionalTransacao = transacaoRepository.findById(id);
        if(optionalTransacao.isPresent()){
            transacaoRepository.delete(optionalTransacao.get());
            return ResponseEntity.noContent().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }

}
