CREATE TABLE transacoes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(255),
    valor DECIMAL (10,2),
    data DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;