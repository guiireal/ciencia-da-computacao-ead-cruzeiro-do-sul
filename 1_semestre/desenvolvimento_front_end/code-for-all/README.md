# Code for All 🌟 - Plataforma Web Acessível

> **Entregável 4**: Git/GitHub + Acessibilidade WCAG 2.1 + Documentação Técnica

Plataforma web desenvolvida em JavaScript puro para democratizar o acesso à educação em tecnologia.

---

## 🎯 Objetivos do Entregável 4

| Categoria | Meta | Status |
|-----------|------|--------|
| **🔄 Git/GitHub** | Repositório organizado + commits descritivos | 🎯 Em andamento |
| **♿ Acessibilidade** | WCAG 2.1 Nível AA | 🎯 Em implementação |
| **📚 Documentação** | README profissional completo | ✅ Concluído |
| **🎨 Front-End** | SPA com Bootstrap 5 | ✅ Concluído |
| **⚡ Performance** | Otimização e boas práticas | 🎯 Planejado |

---

## 🚀 Sobre o Projeto

### Conceito

Uma **Single Page Application (SPA)** moderna desenvolvida com:

- JavaScript ES6+ puro (Vanilla JS)
- Bootstrap 5 via CDN
- Roteamento baseado em hash
- Sistema de templates dinâmicos
- Validação de formulários em tempo real

### Características Principais

✅ **SPA Funcional**: Navegação suave sem recarregar a página  
✅ **8 Páginas**: Home, Sobre, Projetos, Cadastro, Doações, Transparência, Blog, Contato  
✅ **Responsivo**: Bootstrap 5 com design mobile-first  
✅ **Validação**: Formulários com feedback em tempo real  
✅ **Componentes**: Header e Footer reutilizáveis  
✅ **Filtros**: Sistema de filtros para projetos por categoria  

---

## 📁 Estrutura do Projeto

```plaintext
code-for-all/
├── index.html                # Ponto de entrada único
├── assets/
│   ├── js/
│   │   ├── app.js           # Core da SPA (roteamento + lifecycle)
│   │   ├── components.js    # Header e Footer reutilizáveis
│   │   ├── templates.js     # Templates HTML das 8 páginas
│   │   ├── validation.js    # Sistema de validação
│   │   └── projects-filter.js # Filtros de projetos
│   ├── css/backup_css/      # CSS antigo (backup)
│   ├── images/              # Imagens do site
│   └── audios/              # Depoimentos em áudio
├── backup_html/             # HTMLs antigos (antes da SPA)
├── wireframes/              # Wireframes do projeto
└── README.md                # Este arquivo
```

### 📦 Dependências

**Nenhuma dependência npm!** O projeto usa apenas:

- Bootstrap 5.3.2 (CDN)
- Bootstrap Icons 1.11.1 (CDN)
- Google Fonts - Noto Sans (CDN)

---

## 🛠️ Tecnologias

| Tecnologia | Uso | Versão |
|------------|-----|--------|
| **HTML5** | Estrutura semântica | - |
| **CSS3** | Bootstrap 5 via CDN | 5.3.2 |
| **JavaScript** | ES6+ Vanilla JS | - |
| **Bootstrap** | Framework CSS responsivo | 5.3.2 |
| **Bootstrap Icons** | Biblioteca de ícones | 1.11.1 |
| **Git** | Controle de versão | - |
| **GitHub** | Repositório remoto | - |

---

## 🎯 Funcionalidades Implementadas

### 1. Sistema SPA (Single Page Application)

```javascript
// Roteamento baseado em hash
const routes = {
  "/": "home",
  "/sobre": "sobre",
  "/projetos": "projetos",
  "/cadastro": "cadastro",
  "/doacoes": "doacoes",
  "/transparencia": "transparencia",
  "/blog": "blog",
  "/contato": "contato"
};
```

**Fluxo de Navegação:**

1. Usuário clica em link (ex: "Sobre")
2. URL muda para `#/sobre`
3. Event listener detecta mudança (hashchange)
4. `app.js` carrega template correspondente
5. Conteúdo renderizado dinamicamente no `#app-content`
6. Components atualizados (link ativo, título da página)

### 2. Sistema de Templates

Cada página é uma função que retorna HTML:

```javascript
const Templates = {
  home: () => `<div>...</div>`,
  sobre: () => `<div>...</div>`,
  // ... demais páginas
};
```

### 3. Validação de Formulários

- Validação em tempo real (blur + input)
- Feedback visual (Bootstrap classes: is-valid/is-invalid)
- Máscaras automáticas (CPF, telefone, CEP)
- Persistência no localStorage
- Mensagens de erro descritivas

```javascript
Validation.init('cadastroForm');
Validation.initMasks();
```

### 4. Componentes Reutilizáveis

**Header:**

- Navbar responsiva
- Menu hamburguer (mobile)
- Logo SVG
- Links com estado ativo

**Footer:**

- Links rápidos
- Redes sociais
- Informações da ONG

### 5. Filtros de Projetos

Sistema de filtros por categoria:

- Educação
- Saúde
- Tecnologia
- Meio Ambiente
- Todos

---

## 🚀 Como Executar

### Opção 1: Abrir direto no navegador

```bash
# Simplesmente abra o arquivo index.html
code-for-all/index.html
```

### Opção 2: Servidor local (recomendado)

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

### Opção 3: VS Code Live Server

1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## ♿ Acessibilidade (WCAG 2.1 AA)

### Implementações Planejadas

#### Navegação por Teclado

- [ ] Tab/Shift+Tab para navegação
- [ ] Enter/Space para ativar elementos
- [ ] Esc para fechar modais
- [ ] Skip links ("Pular para conteúdo")

#### ARIA e Semântica

- [ ] Landmarks (`<nav>`, `<main>`, `<footer>`)
- [ ] Labels descritivos em formulários
- [ ] `aria-label` e `aria-describedby`
- [ ] `aria-live` para anúncios dinâmicos
- [ ] Estrutura de headings lógica

#### Contraste de Cores

- [ ] Texto: mínimo 4.5:1
- [ ] UI components: mínimo 3:1
- [ ] Modo escuro (opcional)
- [ ] Alto contraste (opcional)

#### Imagens e Mídia

- [ ] Alt text descritivo em todas as imagens
- [ ] Legendas em vídeos
- [ ] Transcrições de áudios
- [ ] Ícones decorativos com `aria-hidden="true"`

#### Formulários

- [ ] Labels sempre visíveis
- [ ] Mensagens de erro claras
- [ ] Feedback visual e textual
- [ ] Validação acessível

---

## 📱 Responsividade

| Breakpoint | Layout | Testado |
|------------|--------|---------|
| < 576px (Mobile) | 1 coluna | ✅ |
| 576-768px (Tablet) | 2 colunas | ✅ |
| 768-992px (Desktop) | 3 colunas | ✅ |
| > 992px (Wide) | 3-4 colunas | ✅ |

Bootstrap 5 Grid System com classes responsivas.

---

## 🔄 Controle de Versão (Git/GitHub)

### Estrutura de Branches

```plaintext
main          ← Branch principal (produção)
  └── develop ← Branch de desenvolvimento (futuro)
```

### Padrão de Commits (Conventional Commits)

```plaintext
<tipo>(<escopo>): <descrição>

Exemplos:
feat(spa): add routing system
fix(validation): correct email regex
docs(readme): update installation guide
style(css): format with prettier
refactor(components): simplify header logic
```

| Tipo | Descrição |
|------|-----------|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Documentação |
| `style` | Formatação |
| `refactor` | Refatoração |
| `perf` | Performance |
| `test` | Testes |
| `chore` | Manutenção |

---

## 📚 Documentação do Código

### app.js - Core da Aplicação

```javascript
class App {
  constructor()              // Inicializa app
  init()                     // Setup inicial
  renderComponents()         // Renderiza header/footer
  setupRouting()            // Configura rotas e listeners
  loadPage()                // Carrega página baseada na rota
  initPageFeatures(page)    // Inicializa features específicas
  setupProjectFilters()     // Configura filtros de projetos
  showSpinner()             // Mostra loading
  hideSpinner()             // Esconde loading
}
```

### templates.js - Sistema de Templates

```javascript
const Templates = {
  home: () => '...',         // Página inicial
  sobre: () => '...',        // Sobre a ONG
  projetos: () => '...',     // Lista de projetos
  cadastro: () => '...',     // Formulário voluntários
  doacoes: () => '...',      // Campanhas de doação
  transparencia: () => '...', // Relatórios
  blog: () => '...',         // Notícias
  contato: () => '...'       // Formulário contato
};
```

### validation.js - Validação

```javascript
const Validation = {
  init(formId)               // Inicializa validação
  validateField(input)       // Valida campo individual
  validateForm(form)         // Valida formulário completo
  applyMask(input, type)     // Aplica máscara
  handleSubmit(form)         // Processa envio
};
```

### components.js - Componentes

```javascript
const Components = {
  renderHeader()             // Retorna HTML do header
  renderFooter()             // Retorna HTML do footer
  updateActiveNav(path)      // Marca link ativo
};
```

---

## 🧪 Testes

### Checklist de Funcionalidades

- [x] Navegação entre todas as 8 páginas
- [x] Renderização de templates
- [x] Validação de formulários (cadastro)
- [x] Validação de formulários (contato)
- [x] Validação de formulários (doações)
- [x] Filtros de projetos funcionando
- [x] Máscaras de input (CPF, telefone, CEP)
- [x] Persistência no localStorage
- [x] Links ativos na navegação
- [x] Responsividade (mobile, tablet, desktop)
- [ ] Testes de acessibilidade (pendente)
- [ ] Testes de performance (pendente)

### Navegadores Testados

- ✅ Chrome 120+
- ✅ Firefox 120+
- ✅ Edge 120+
- ⚠️ Safari 17+ (teste parcial)

---

## 🚧 Roadmap - Próximas Implementações

### Curto Prazo (Entregável 4)

- [ ] **Acessibilidade WCAG 2.1 AA**
  - [ ] Navegação por teclado completa
  - [ ] ARIA labels e landmarks
  - [ ] Contraste de cores validado
  - [ ] Testes com leitores de tela
  
- [ ] **Otimização**
  - [ ] Minificação de CSS/JS
  - [ ] Compressão de imagens
  - [ ] Lazy loading
  - [ ] Service Worker para cache

- [ ] **Git/GitHub**
  - [ ] Histórico de commits organizado
  - [ ] Pull Requests documentados
  - [ ] Issues rastreadas
  - [ ] Releases versionadas

### Médio Prazo

- [ ] **Build Tools**
  - [ ] Configurar Vite ou Webpack
  - [ ] npm scripts para build
  - [ ] Minificação automatizada
  - [ ] Sourcemaps

- [ ] **Testes**
  - [ ] Testes unitários (Vitest)
  - [ ] Testes E2E (Playwright)
  - [ ] Cobertura de código

### Longo Prazo

- [ ] **Backend**
  - [ ] API REST com Node.js
  - [ ] Banco de dados
  - [ ] Autenticação
  - [ ] Painel administrativo

- [ ] **PWA**
  - [ ] Manifest.json
  - [ ] Service Workers avançados
  - [ ] Modo offline
  - [ ] Instalável

---

## 📊 Estatísticas do Projeto

| Métrica | Valor |
|---------|-------|
| **Linhas de Código** | ~3.000 |
| **Arquivos JavaScript** | 5 |
| **Páginas (Templates)** | 8 |
| **Componentes** | 2 (Header, Footer) |
| **Formulários** | 4 |
| **Commits** | 🎯 Em desenvolvimento |
| **Tamanho Total** | ~500 KB |

---

## 🤝 Como Contribuir

### Fluxo de Contribuição

1. **Fork** o repositório
2. **Clone** seu fork

   ```bash
   git clone https://github.com/SEU_USUARIO/code-for-all.git
   ```

3. **Crie** uma branch

   ```bash
   git checkout -b feature/minha-feature
   ```

4. **Faça** suas alterações
5. **Commit** com mensagem descritiva

   ```bash
   git commit -m "feat(spa): add new page"
   ```

6. **Push** para seu fork

   ```bash
   git push origin feature/minha-feature
   ```

7. **Abra** um Pull Request

### Padrões de Código

- ✅ Usar ES6+ (const/let, arrow functions, template literals)
- ✅ Comentários em português
- ✅ Indentação de 2 espaços
- ✅ Nomenclatura clara e descritiva
- ✅ Funções pequenas e focadas

---

## 📄 Licença

Este projeto é acadêmico, desenvolvido para fins educacionais.

**MIT License** - Livre para uso, modificação e distribuição.

---

## 📞 Suporte

### Links

- 🌐 **Repositório**: <https://github.com/guiireal/code-for-all>
- 🐛 **Issues**: <https://github.com/guiireal/code-for-all/issues>
- 📧 **E-mail**: <contato@codeforall.org>

### Redes Sociais (Fictícias)

- 📘 Facebook: @codeforallbrasil
- 📷 Instagram: @codeforall.br
- 💼 LinkedIn: Code for All Brasil
- 🐦 Twitter: @codeforall_br

---

## 🌟 Agradecimentos

Obrigado por conferir o projeto **Code for All**!

Se este projeto foi útil, considere dar uma ⭐ no repositório!

---

Desenvolvido com ❤️ para democratizar o acesso à tecnologia

**Última atualização**: 16 de Outubro de 2025  
**Versão**: 4.0.0-dev (Em desenvolvimento)  
**Status**: 🎯 Entregável 4 em andamento

---

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3.2-purple.svg)](https://getbootstrap.com/)

</div>
