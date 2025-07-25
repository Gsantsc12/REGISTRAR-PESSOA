# 📌 Registrar Pessoa – API Pierserv

Este diretório contém os testes automatizados para o endpoint de **registro de pessoa** na plataforma **Pierserv**, desenvolvidos por **Gabriel Ferreira Santos**.

## 📤 Endpoint

- **Método:** POST
- **Rota:** /registrarPessoa

## 📦 Payload Exemplo

```json
{
  "razao_social": "Empresa XPTO",
  "nome_fantasia": "XPTO",
  "cnpj_cpf": "12345678000100",
  "insc_est": "ISENTO",
  "email": "empresa@xpto.com",
  "telefone": "(11) 99999-0000",
  "sigla_cliente": "XP"
}
```

## ✅ Validações
- Status 200
- Mensagem de sucesso
- Validação de campos obrigatórios
