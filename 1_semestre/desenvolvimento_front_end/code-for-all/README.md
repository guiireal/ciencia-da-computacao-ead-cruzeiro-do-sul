# Code for All 🌟

Site institucional desenvolvido para a ONG Code for All como projeto acadêmico.

## 📋 Sobre o Projeto

O **Code for All** é um site institucional desenvolvido para uma ONG fictícia focada em democratizar o acesso à educação em tecnologia. O projeto foi criado utilizando HTML5 semântico puro, Canvas API para visualizações de dados e JavaScript vanilla.

## ✨ Características

- ✅ **HTML5 100% Válido** - Todas as páginas seguem os padrões W3C
- ✅ **Acessibilidade** - ARIA labels, alt texts descritivos e navegação por teclado
- ✅ **Formulários Validados** - Validação HTML5 nativa em todos os formulários
- ✅ **Gráficos Personalizados** - 3 gráficos criados com Canvas API
- ✅ **SVG Icons** - Ícones vetoriais para melhor qualidade e performance
- ✅ **Responsivo** - Design adaptável a diferentes dispositivos
- ✅ **SEO Otimizado** - Tags semânticas e meta tags apropriadas

## 📁 Estrutura do Projeto

```
code-for-all/
├── index.html              # Página inicial
├── sobre.html              # Sobre a ONG
├── projetos.html           # Lista de projetos
├── voluntariado.html       # Inscrição de voluntários
├── doacoes.html            # Página de doações
├── transparencia.html      # Relatórios e documentos
├── blog.html               # Blog e notícias
├── contato.html            # Formulário de contato
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos base
│   ├── images/             # Imagens do projeto
│   └── audios/             # Áudios de depoimentos
├── js/
│   └── charts.js           # Gráficos Canvas
├── documentacao-tecnica/
│   └── DOCS.md             # Documentação completa
└── wireframes/             # Wireframes das páginas
```

## 🎨 Páginas do Site

1. **Início** - Hero section, projetos em destaque e depoimentos
2. **Sobre Nós** - História, valores, equipe e gráficos de impacto
3. **Projetos** - Catálogo de projetos sociais com filtros
4. **Voluntariado** - Oportunidades e formulário de inscrição
5. **Doações** - Campanhas e formas de doar
6. **Transparência** - Relatórios financeiros e documentos públicos
7. **Blog** - Notícias e newsletter
8. **Contato** - Formulário de contato e informações

## 📊 Gráficos Implementados

### 1. Gráfico de Barras
- **Dados:** Impacto Social por Região
- **Dimensões:** 800x600px
- **Regiões:** Norte, Nordeste, Centro-Oeste, Sudeste, Sul

### 2. Gráfico de Pizza
- **Dados:** Distribuição de Recursos por Projeto
- **Dimensões:** 600x600px
- **Categorias:** 5 tipos de projetos

### 3. Gráfico de Linha
- **Dados:** Evolução de Voluntários (2020-2025)
- **Dimensões:** 800x400px
- **Tendência:** Crescimento de 400%

## 📝 Formulários

### Formulário de Contato
- Nome (obrigatório, max 100 caracteres)
- E-mail (obrigatório, validação de formato)
- Assunto (obrigatório, max 100 caracteres)
- Mensagem (obrigatória, max 1000 caracteres)

### Formulário de Doação
- Método de pagamento (radio: Cartão, PIX, Boleto)
- Valor da doação (obrigatório, mínimo R$ 5)

### Formulário de Voluntariado
- Nome completo (obrigatório)
- E-mail (obrigatório)
- Habilidades (obrigatório, max 500 caracteres)
- Disponibilidade (select: meio período, integral, remoto)

### Newsletter
- E-mail (obrigatório)

## 🎯 Melhorias Implementadas (Score 100/100)

### HTML
- ✅ SVG logo funcional em todas as páginas
- ✅ Alt texts descritivos e significativos
- ✅ Form actions com endpoints POST
- ✅ Atributo `type` em todos os botões
- ✅ Labels corretamente associados aos inputs
- ✅ Fieldset para grupos de radio buttons
- ✅ Links de download com informações de tamanho e formato
- ✅ Lazy loading em imagens

### JavaScript
- ✅ Script com atributo `defer`
- ✅ Path relativo corrigido

### Acessibilidade
- ✅ ARIA labels em navegação
- ✅ SVG icons com títulos descritivos
- ✅ Links com aria-label
- ✅ Foco visível em elementos interativos

## 🚀 Como Usar

1. Clone o repositório
2. Abra qualquer arquivo HTML em um navegador moderno
3. Navegue entre as páginas usando o menu

## 📖 Documentação Técnica

A documentação completa está disponível em:
`/documentacao-tecnica/DOCS.md`

Inclui:
- Especificação detalhada dos formulários
- Documentação dos gráficos e visualizações
- Relatório de validação HTML (Score: 100/100)
- Guia de melhorias implementadas
- Recomendações para próximas fases

## 🏆 Validação

Todas as páginas foram validadas e alcançaram **100/100** nos critérios:
- ✅ HTML5 válido (W3C)
- ✅ Acessibilidade
- ✅ SEO
- ✅ Boas práticas
- ✅ Performance

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Canvas API
- SVG

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais.

## 👥 Autor

Desenvolvido como projeto acadêmico para o curso de Ciência da Computação - Universidade Cruzeiro do Sul.

---

## Visão Original do Projeto

### Personas e Casos de Uso

- **Administrador da ONG**: gerenciar informações institucionais; cadastrar e editar projetos; acompanhar métricas de engajamento; gerenciar voluntários e doações;

- **Voluntário**: descobrir oportunidades de voluntariado; candidatar-se a projetos; acompanhar histórico de participação; compartilhar experiências.

- **Doador/apoiador**: conhecer projetos e impactos; realizar doações on-line; acompanhar aplicação de recursos; receber relatórios de transparência;

- **Visitante**: conhecer a organização e seus projetos; acessar informações de contato; visualizar galeria de atividades; compartilhar conteúdo em redes sociais.

### Funcionalidades Principais

- **Área institucional**: página inicial com missão, visão e valores; histórico e conquistas da organização; equipe e estrutura organizacional; relatórios de transparência;

- **Gestão de projetos**: cadastro detalhado de projetos sociais; galeria de fotos e vídeos; indicadores de impacto e resultados; sistema de categorização;

- **Engajamento de voluntários**: portal de oportunidades de voluntariado; sistema de inscrição e seleção; área do voluntário com histórico; certificados digitais de participação;

- **Captação de recursos**: campanhas de arrecadação; sistema de doações on-line; metas e progresso em tempo real; relatórios de prestação de contas;

- **Comunicação e transparência**: blog com notícias e atualizações; newsletter para engajamento; área de imprensa com releases; central de documentos públicos.
