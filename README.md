# AgendaPlus Frontend

Interface web do AgendaPlus para acesso aos fluxos de agenda, clientes e demais funcionalidades da aplicação.

O projeto utiliza **Next.js**, **React**, **TypeScript**, **Material UI** e **Axios**, consumindo a API do AgendaPlus Backend.

## Visão geral

A aplicação foi estruturada para centralizar a navegação e os fluxos operacionais do sistema em uma interface web.

Entre os pontos presentes no projeto estão:

- estrutura de navegação com menu, header e footer;
- página inicial da aplicação;
- fluxo de clientes;
- integração com API por meio de Axios;
- componentes reutilizáveis;
- tipagem com TypeScript.

## Stack

- Next.js 15
- React 19
- TypeScript
- Material UI
- Tailwind CSS
- Axios

## Estrutura

O projeto utiliza a estrutura de páginas do Next.js e separa componentes e serviços da interface.

```text
src/
├── components/
├── pages/
└── services/
```

## Executando o projeto

Instale as dependências:

```bash
npm install
```

Execute em desenvolvimento:

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

Build de produção:

```bash
npm run build
npm run start
```

## Back-end

A API utilizada pelo projeto está disponível em:

[agendaplus-backend](https://github.com/hudsonjr21/agendaplus-backend)

## Autor

**Hudson Ferreira**

[Portfólio](https://techud.com.br) · [LinkedIn](https://linkedin.com/in/ferreira-hudson)
