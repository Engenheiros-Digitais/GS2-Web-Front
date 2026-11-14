###   Diluvium

O **Diluvium** é uma plataforma de monitoramento preditivo e preventivo de alagamentos urbanos, desenvolvida com foco nos córregos do Ipiranga e Moinho Velho, na cidade de São Paulo.

A proposta é utilizar sensores para acompanhar o nível dos córregos e as condições de chuva, identificar situações de risco e disponibilizar informações de maneira acessível à população. A plataforma reúne um mapa interativo, informações sobre os trechos monitorados e um espaço para registro de relatos de alagamento por moradores.

> **Projeto acadêmico:** esta aplicação é um protótipo desenvolvido para fins educacionais. Os sensores e valores apresentados podem utilizar dados simulados, não representando um sistema de monitoramento operacional em tempo real.

## Objetivo

Desenvolver uma solução tecnológica que contribua para a prevenção de alagamentos, permitindo identificar situações de risco com antecedência, informar a população e facilitar o acesso a informações sobre as condições dos córregos e das ruas próximas.

## Funcionalidades

- **Mapa interativo:** visualização da região monitorada, com representação dos sensores e dos trechos de ruas.
- **Monitoramento dos sensores:** acompanhamento de informações como nível da água e condições de chuva, com atualização periódica dos dados.
- **Identificação de riscos:** classificação dos trechos de acordo com seus estados de monitoramento.
- **Painel de informações:** apresentação de dados gerais e informações detalhadas sobre sensores e trechos selecionados.
- **Registro de relatos:** formulário para moradores informarem ocorrências de alagamento.
- **Consulta e gerenciamento de relatos:** visualização, edição e exclusão dos relatos registrados.
- **Apresentação da solução:** página dedicada a explicar a proposta e o funcionamento do Diluvium.

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| React | Construção da interface e dos componentes |
| JavaScript | Lógica e funcionalidades da aplicação |
| Vite | Ambiente de desenvolvimento e build |
| Tailwind CSS | Estilização da interface |
| Leaflet | Biblioteca de mapas interativos |
| React-Leaflet | Integração do Leaflet com React |
| OpenStreetMap | Base cartográfica utilizada no mapa |
| React Router DOM | Navegação entre as páginas |

## Estrutura do projeto

```text
GS2-Web-Front/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

- **components/**: componentes reutilizáveis da interface.
- **hooks/**: hooks personalizados para gerenciamento e atualização de dados.
- **pages/**: páginas principais da aplicação.
- **services/**: serviços e funções relacionados aos dados, sensores e classificação de estados.

### Passo a passo de Como executar o projeto;

## Pré-requisitos

Antes de começar, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- npm (gerenciador de pacotes instalado junto ao Node.js)
- Git

# 1° - Clonar o repositório

```bash
git clone https://github.com/Engenheiros-Digitais/GS2-Web-Front.git
```

# 2° - Acessar a pasta do projeto

```bash
cd GS2-Web-Front
```

# 3° - Instalar as dependências

```bash
npm install
```

# 4° - Executar a aplicação

```bash
npm run dev
```

Após iniciar o servidor, o terminal exibirá o endereço local para acessar a aplicação pelo navegador.

## Outros comandos disponíveis

```bash
npm run build
```

Para gerar a versão de produção da aplicação.


```bash
npm run preview
```

Permite visualizar localmente a versão gerada pelo build.


```bash
npm run lint
```

Executa a verificação estática do código utilizando Oxlint.

## Demonstração

Acesse a versão publicada do projeto:

**[Diluvium — Plataforma de monitoramento](https://diluvium-mu.vercel.app/)**
