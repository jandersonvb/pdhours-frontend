# PD Hours Control

Este projeto é uma aplicação desenvolvida em [Next.js](https://nextjs.org/) baseada no design disponível no [Figma](https://www.figma.com/design/PeJGyGTwHcUj0K3zADkXbA/PD-Hours?node-id=0-1&p=f&t=eauvObYMpw9kksud-0). A aplicação é voltada para a gestão de horas trabalhadas por squads e funcionários, incluindo relatórios detalhados.

## Recursos

- **Módulo Employees**: Cadastro e gerenciamento de funcionários.
- **Módulo Squads**: Organização de equipes para controle de projetos.
- **Módulo Reports**: Geração de relatórios sobre as horas trabalhadas.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior).
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).
- Banco de dados [MySQL](https://www.mysql.com/) 

## Configuração do projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/jandersonvb/pdhours-frontend.git
   cd pd-hours-frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```



## Scripts disponíveis

- `dev`: Inicia o servidor de desenvolvimento.

  ```bash
  npm run dev
  ```

## Estrutura do Projeto

```
.
├── public
├── src
│   ├── components    # Componentes reutilizáveis
│   ├── styles        # Estilos globais e específicos
└──
```

## Design no Figma

Todo o design foi baseado no protótipo do Figma: [PD Hours](https://www.figma.com/design/PeJGyGTwHcUj0K3zADkXbA/PD-Hours?node-id=0-1&p=f&t=eauvObYMpw9kksud-0).

## Licença

Este projeto está sob a licença [MIT](./LICENSE).