# Globo

Este projeto é um monorepo, frontend e backend.


Backend consiste em construir uma API Restful, onde a API deve consumir a API IMDb: _Ratings, Reviews, and Where to Watch the Best Movies & TV Shows_ e aplicar as regras de negócio.

O objetivo do frontend é criar uma interface para que o usuário possa navegar pela aplicação e visualizar os dados e interagir com a aplicação conforme as funcionalidades oferecida pela API.

## Backend

### Tecnologias Utilizadas
- **Node**: Ambiente de execução JavaScript do lado do servidor.
- **typescript**: Superset tipado de JavaScript.
- **express**: Framework backend que permite o desenvolvimento de aplicações a partir da utilização do Node
- **typeorm**: ORM (Object-Relational Mapping) para TypeScript e JavaScript.
- **tsyringe**: Biblioteca de injeção de dependência para TypeScript.
- **bcrypt**: Biblioteca de criptografia de senha para Node.js.
- **uuid**: Identificador único universal.
- **jsonwebtoken**: Implementação de JSON Web Tokens para Node.js.
- **docker**: Plataforma de conteinerização para desenvolvimento, implantação e execução de aplicativos.
- **postgres**:  Sistema de gerenciamento de banco de dados relacional de código aberto.
- **PNPM**: Gerenciador de pacotes rápido, eficiente, que compartilha dependências entre diferentes projetos

### Checklist de desenvolvimento do backend:

### Usuários
- [x] Cadastro 
- [x] Somente usuário administrador pode cadastrar novos usuários
- [ ] Edição
- [ ] Exclusão lógica (Desativação)

### Filmes
- [ ] Listagem (deverá ter filtro por diretor, nome, gênero e/ou atores)
- [ ] Cadastro (Somente um usuário administrador poderá realizar esse cadastro)
- [ ] Voto (A contagem dos votos será feita por usuário de 0-4 que indica quanto o usuário gostou do filme)
- [ ] Detalhe do filme trazendo todas as informações sobre o filme, inclusive a média dos votos

### Outros itens
- [x] Migrations para a criação das tabelas do banco de dados
- [ ] Testes
- [ ] Documentação do projeto

### Instruções de Uso

Acesse a pasta backend e execute os seguintes comandos:

1. **Instalação das Dependências:**
  ```sh
   pnpm install
  ```

2. **Execução do Banco de dados:**
  ```sh
   docker-compose up --build
  ```

3. **Execução do Projeto:**
  ```sh
   pnpm dev
  ```
