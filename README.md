# Fortmobile Front-End Teste

Aplicação de cadastro de usuário em localStorage, podendo listar esses usuários armazenados em outra aba.

## Instalação

Passo a passo de como rodar

```bash
Para instalar dependências
  npm install

Para executar o servidor local
  ng serve

Acessar
  http://localhost:4200/
```

## Melhorias a serem feitas

Precisa ser feito a opção de deletar um usuário somente;  
Inserir validação visual nos campos;  
Algoritmo de verificação de CPF;

## Explicação

Como solução, foi utilizado o FormGroup, FormControl e Validator para receber informações, validar campos e realizar alterações no localStorage.  
Como armazenamento, foi utilizado o localStorage, inserindo um Array de users para serem exibidos na tela de usuários já cadastrados.  
Na parte visual foi utilizado apenas CSS puro.
