const atendimento = `
  CREATE TABLE IF NOT EXISTS atendimento (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  assunto VARCHAR,
  cliente VARCHAR,
  demanda VARCHAR,
  tempo_abertura VARCHAR,
  resumo VARCHAR NULL,
  status VARCHAR,
  canal VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

module.exports = atendimento