/**
 * Code for All - Aplicação Principal (SPA)
 * Sistema de roteamento e gerenciamento de páginas
 */

// Configuração de rotas
const routes = {
  "/": "home",
  "/sobre": "sobre",
  "/projetos": "projetos",
  "/cadastro": "cadastro",
  "/doacoes": "doacoes",
  "/transparencia": "transparencia",
  "/blog": "blog",
  "/contato": "contato",
};

/**
 * Classe principal da aplicação
 */
class App {
  constructor() {
    this.init();
  }

  /**
   * Inicializa a aplicação
   */
  init() {
    // Renderiza componentes fixos
    this.renderComponents();

    // Configura roteamento
    this.setupRouting();

    // Carrega página inicial
    this.loadPage();

    // Configura listeners globais
    this.setupGlobalListeners();
  }

  /**
   * Renderiza header e footer
   */
  renderComponents() {
    const header = document.getElementById("app-header");
    const footer = document.getElementById("app-footer");

    if (header) header.innerHTML = Components.renderHeader();
    if (footer) footer.innerHTML = Components.renderFooter();
  }

  /**
   * Configura o sistema de roteamento
   */
  setupRouting() {
    // Listener para mudanças de hash
    window.addEventListener("hashchange", () => {
      this.loadPage();
    });

    // Listener para links internos
    document.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]") || e.target.closest("[data-link]")) {
        e.preventDefault();
        const link = e.target.matches("[data-link]")
          ? e.target
          : e.target.closest("[data-link]");
        const href = link.getAttribute("href");
        if (href) {
          window.location.hash = href;
        }
      }
    });
  }

  /**
   * Carrega a página baseada na rota atual
   */
  loadPage() {
    // Mostra spinner
    this.showSpinner();

    // Obtém a rota atual
    const hash = window.location.hash.slice(1) || "/";
    const page = routes[hash] || "home";

    // Atualiza título da página
    this.updateTitle(page);

    // Renderiza o template
    setTimeout(() => {
      const content = document.getElementById("app-content");
      if (content && Templates[page]) {
        content.innerHTML = Templates[page]();

        // Atualiza navegação ativa
        Components.updateActiveNav(hash);

        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Inicializa funcionalidades específicas da página
        this.initPageFeatures(page);

        // Esconde spinner
        this.hideSpinner();
      }
    }, 300); // Pequeno delay para efeito de transição
  }

  /**
   * Inicializa funcionalidades específicas de cada página
   */
  initPageFeatures(page) {
    switch (page) {
      case "sobre":
        // Inicializa gráficos
        if (typeof ChartManager !== "undefined") {
          setTimeout(() => ChartManager.init(), 100);
        }
        break;

      case "projetos":
        this.setupProjectFilters();
        break;

      case "cadastro":
        Validation.init("cadastroForm");
        Validation.initMasks();
        break;

      case "doacoes":
        Validation.init("doacaoForm");
        break;

      case "contato":
        Validation.init("contatoForm");
        break;

      case "blog":
        Validation.init("newsletterForm");
        break;
    }
  }

  /**
   * Configura filtros de projetos
   */
  setupProjectFilters() {
    const filterButtons = document.querySelectorAll("#project-filters button");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        // Atualiza botões ativos
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        filterButtons.forEach((btn) =>
          btn.classList.replace("btn-primary", "btn-outline-primary")
        );
        button.classList.add("active");
        button.classList.replace("btn-outline-primary", "btn-primary");

        // Filtra projetos
        projectCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.style.display = "block";
            card.classList.add("fade-in");
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  /**
   * Atualiza o título da página
   */
  updateTitle(page) {
    const titles = {
      home: "Code for All - Democratizando o acesso à tecnologia",
      sobre: "Sobre Nós - Code for All",
      projetos: "Nossos Projetos - Code for All",
      cadastro: "Seja um Voluntário - Code for All",
      doacoes: "Doações - Code for All",
      transparencia: "Transparência - Code for All",
      blog: "Blog e Notícias - Code for All",
      contato: "Contato - Code for All",
    };

    document.title = titles[page] || "Code for All";
  }

  /**
   * Mostra spinner de loading
   */
  showSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) spinner.classList.add("active");
  }

  /**
   * Esconde spinner de loading
   */
  hideSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) spinner.classList.remove("active");
  }

  /**
   * Configura listeners globais
   */
  setupGlobalListeners() {
    // Adiciona animações suaves aos cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observa todos os cards
    setTimeout(() => {
      document.querySelectorAll(".card").forEach((card) => {
        observer.observe(card);
      });
    }, 500);
  }
}

// Gerenciador de Gráficos adaptado para SPA
const ChartManager = {
  init: () => {
    // Verifica se os elementos canvas existem
    const barChart = document.getElementById("bar-chart");
    const pieChart = document.getElementById("pie-chart");
    const lineChart = document.getElementById("line-chart");

    if (barChart) ChartManager.drawBarChart(barChart);
    if (pieChart) ChartManager.drawPieChart(pieChart);
    if (lineChart) ChartManager.drawLineChart(lineChart);
  },

  drawBarChart: (canvas) => {
    const ctx = canvas.getContext("2d");
    const regions = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"];
    const beneficiaries = [1200, 2500, 1800, 3200, 1500];
    const barColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

    const barWidth = 80;
    const barSpacing = 100;
    const maxValue = Math.max(...beneficiaries);
    const chartHeight = 400;
    const chartBottom = 500;

    // Eixos
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, chartBottom);
    ctx.lineTo(750, chartBottom);
    ctx.stroke();

    // Barras
    beneficiaries.forEach((value, index) => {
      const barHeight = (value / maxValue) * chartHeight;
      const x = 80 + index * barSpacing;
      const y = chartBottom - barHeight;

      ctx.fillStyle = barColors[index];
      ctx.fillRect(x, y, barWidth, barHeight);

      ctx.fillStyle = "#333";
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.fillText(regions[index], x + barWidth / 2, chartBottom + 20);
      ctx.fillText(value, x + barWidth / 2, y - 10);
    });

    // Título do eixo Y
    ctx.save();
    ctx.translate(20, 300);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Beneficiários", 0, 0);
    ctx.restore();
  },

  drawPieChart: (canvas) => {
    const ctx = canvas.getContext("2d");
    const projects = [
      { nome: "Educação Digital", valor: 35, cor: "#FF6384" },
      { nome: "Inclusão Tecnológica", valor: 25, cor: "#36A2EB" },
      { nome: "Programação para Jovens", valor: 20, cor: "#FFCE56" },
      { nome: "Capacitação Profissional", valor: 15, cor: "#4BC0C0" },
      { nome: "Outros Projetos", valor: 5, cor: "#9966FF" },
    ];

    const centerX = 300;
    const centerY = 250;
    const radius = 150;
    let currentAngle = -Math.PI / 2;

    projects.forEach((project) => {
      const sliceAngle = (project.valor / 100) * 2 * Math.PI;

      ctx.beginPath();
      ctx.fillStyle = project.cor;
      ctx.moveTo(centerX, centerY);
      ctx.arc(
        centerX,
        centerY,
        radius,
        currentAngle,
        currentAngle + sliceAngle
      );
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();

      currentAngle += sliceAngle;
    });

    // Legenda
    let legendY = 100;
    const legendX = 480;
    projects.forEach((project) => {
      ctx.fillStyle = project.cor;
      ctx.fillRect(legendX, legendY, 20, 20);

      ctx.fillStyle = "#333";
      ctx.font = "14px Arial";
      ctx.textAlign = "left";
      ctx.fillText(
        `${project.nome} (${project.valor}%)`,
        legendX + 30,
        legendY + 15
      );

      legendY += 35;
    });
  },

  drawLineChart: (canvas) => {
    const ctx = canvas.getContext("2d");
    const years = ["2020", "2021", "2022", "2023", "2024", "2025"];
    const volunteers = [50, 85, 120, 160, 200, 250];

    const lineChartWidth = 700;
    const lineChartHeight = 300;
    const lineChartBottom = 350;
    const lineChartLeft = 80;

    // Eixos
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(lineChartLeft, 50);
    ctx.lineTo(lineChartLeft, lineChartBottom);
    ctx.lineTo(lineChartLeft + lineChartWidth, lineChartBottom);
    ctx.stroke();

    // Pontos
    const maxVolunteers = Math.max(...volunteers);
    const xStep = lineChartWidth / (years.length - 1);
    const points = volunteers.map((value, index) => {
      const x = lineChartLeft + index * xStep;
      const y = lineChartBottom - (value / maxVolunteers) * lineChartHeight;
      return { x, y, value };
    });

    // Linha
    ctx.strokeStyle = "#36A2EB";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((point) => {
      ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();

    // Pontos e rótulos
    points.forEach((point, index) => {
      ctx.fillStyle = "#36A2EB";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
      ctx.fill();

      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#333";
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.fillText(years[index], point.x, lineChartBottom + 25);
      ctx.fillText(point.value, point.x, point.y - 15);
    });

    // Título do eixo Y
    ctx.save();
    ctx.translate(30, 200);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Número de Voluntários", 0, 0);
    ctx.restore();

    // Título do eixo X
    ctx.fillStyle = "#333";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      "Ano",
      lineChartLeft + lineChartWidth / 2,
      lineChartBottom + 50
    );
  },
};

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  new App();
});

// Adiciona estilos de animação
const style = document.createElement("style");
style.textContent = `
    .fade-in {
        animation: fadeIn 0.5s ease-in;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    #app-content {
        min-height: 60vh;
    }
`;
document.head.appendChild(style);
