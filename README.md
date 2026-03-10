# 🛍️ Drip Store

Drip Store é um e-commerce frontend desenvolvido em React, com foco em uma experiência de compra moderna e responsiva. O projeto conta com listagem de produtos, filtros, galeria de imagens e página de detalhes do produto.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| [React](https://react.dev/) | ^19.2.0 | Biblioteca principal de UI |
| [React Router DOM](https://reactrouter.com/) | ^7.13.1 | Roteamento entre páginas |
| [Axios](https://axios-http.com/) | ^1.13.6 | Requisições HTTP |
| [React Icons](https://react-icons.github.io/react-icons/) | ^5.5.0 | Biblioteca de ícones |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.1 | Estilização utilitária |
| [Vite](https://vitejs.dev/) | ^7.3.1 | Bundler e servidor de desenvolvimento |

---

## 📁 Estrutura de Pastas

```
loja-drip/
├── public/                   # Imagens públicas (slides, coleções, produtos)
├── src/
│   ├── assets/               # Ícones SVG e imagens estáticas
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Logo/
│   │   ├── Section/
│   │   ├── ProductCard/
│   │   ├── ProductListing/
│   │   ├── ProductOptions/
│   │   ├── ProductDetails/
│   │   ├── BuyBox/
│   │   ├── Gallery/
│   │   └── FilterGroup/
│   ├── pages/                # Páginas da aplicação
│   │   ├── Layout/
│   │   ├── HomePage/
│   │   ├── ProductListingPage/
│   │   └── ProductViewPage/
│   ├── App.jsx               # Configuração de rotas
│   └── main.jsx              # Ponto de entrada
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🗺️ Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `HomePage` | Página inicial com slider, coleções e produtos em alta |
| `/produtos` | `ProductListingPage` | Listagem de produtos com filtros e ordenação |
| `/product/:id` | `ProductViewPage` | Detalhes do produto com galeria e buy box |

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/loja-drip.git

# Acesse a pasta do projeto
cd loja-drip

# Instale as dependências
npm install
```

---

## ▶️ Rodando o Projeto

### Ambiente de Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview do Build

```bash
npm run preview
```

Permite visualizar o build de produção localmente antes do deploy.

### Lint

```bash
npm run lint
```

---

## 🎨 Paleta de Cores

| Nome | Hex |
|---|---|
| Primary | `#C92071` |
| Secondary | `#B5B6F2` |
| Tertiary | `#991956` |
| Error | `#EE4266` |
| Success | `#52CA76` |
| Warning | `#F6AA1C` |
| Dark Gray | `#1F1F1F` |
| Dark Gray 2 | `#474747` |
| Dark Gray 3 | `#666666` |
| Light Gray | `#8F8F8F` |
| Light Gray 2 | `#CCCCCC` |
| Light Gray 3 | `#F5F5F5` |
| White | `#FFFFFF` |

---

## 🧩 Componentes Principais

### `<Layout />`
Componente base que envolve todas as páginas, renderizando o `<Header />` e o `<Footer />` de forma consistente. Recebe `children` como prop para renderizar o conteúdo de cada página.

### `<Header />`
Cabeçalho com logo, campo de busca com redirecionamento, links de navegação (`NavLink`), área de login/cadastro e ícone de carrinho.

### `<Footer />`
Rodapé com logo, descrição da empresa, links de redes sociais e informações de copyright.

### `<Section />`
Componente de seção reutilizável com suporte a título, alinhamento (`left` | `center`) e link opcional.

### `<ProductCard />`
Exibe informações de um produto: imagem, nome, preço e preço com desconto (com linha riscada quando aplicável).

### `<ProductListing />`
Recebe um array de produtos e renderiza múltiplos `<ProductCard />`.

### `<Gallery />`
Galeria de imagens com navegação por setas, suporte a thumbnails e animação de slide.

### `<BuyBox />`
Exibe informações detalhadas do produto: nome, referência, avaliação, preços e botão de compra. Suporta `<ProductOptions />` como filho.

### `<ProductOptions />`
Renderiza opções de variação do produto (tamanho ou cor) no formato quadrado ou circular.

### `<FilterGroup />`
Grupo de filtros com suporte a `checkbox` ou `radio`, renderizado dinamicamente a partir de um array de opções.

---

## ☁️ Deploy

O projeto está configurado para deploy na [Vercel](https://vercel.com/). Após cada push na branch principal, o deploy é realizado automaticamente.

Para fazer deploy manualmente via CLI:

```bash
# Instale a CLI da Vercel (caso não tenha)
npm install -g vercel

# Faça o deploy
vercel
```

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais pela [Digital College](https://digitalcollege.com.br/).