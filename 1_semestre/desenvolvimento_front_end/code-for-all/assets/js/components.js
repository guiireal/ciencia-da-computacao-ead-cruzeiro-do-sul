/**
 * Componentes reutilizáveis da aplicação
 * Header e Footer que aparecem em todas as páginas
 */

const Components = {
  /**
   * Renderiza o cabeçalho com navegação
   */
  renderHeader: () => {
    return `
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div class="container">
                    <a class="navbar-brand d-flex align-items-center" href="#/" data-link>
                        <svg width="40" height="40" viewBox="0 0 40 40" class="me-2" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="#36A2EB"/>
                            <text x="20" y="28" font-size="24" fill="white" text-anchor="middle" 
                                  font-family="monospace" font-weight="bold">&lt;/&gt;</text>
                        </svg>
                        <span class="fw-bold">Code for All</span>
                    </a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" aria-controls="navbarNav" 
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#/" data-link>Início</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/sobre" data-link>Sobre Nós</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/projetos" data-link>Projetos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/cadastro" data-link>Seja um voluntário</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/doacoes" data-link>Doações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/transparencia" data-link>Transparência</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/blog" data-link>Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
  },

  /**
   * Renderiza o rodapé com links e redes sociais
   */
  renderFooter: () => {
    return `
            <footer class="bg-dark text-white mt-5 py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <h5>Links Rápidos</h5>
                            <ul class="list-unstyled">
                                <li><a href="#/cadastro" class="text-white-50 text-decoration-none" data-link>Seja um voluntário</a></li>
                                <li><a href="#/doacoes" class="text-white-50 text-decoration-none" data-link>Doações</a></li>
                                <li><a href="#/contato" class="text-white-50 text-decoration-none" data-link>Contato</a></li>
                            </ul>
                        </div>
                        
                        <div class="col-md-4 mb-3">
                            <h5>Redes Sociais</h5>
                            <div class="d-flex gap-3">
                                <a href="https://twitter.com/codeforall" class="text-white-50" 
                                   aria-label="Siga-nos no Twitter/X" target="_blank">
                                    <i class="bi bi-twitter-x fs-4"></i>
                                </a>
                                <a href="https://facebook.com/codeforall" class="text-white-50" 
                                   aria-label="Siga-nos no Facebook" target="_blank">
                                    <i class="bi bi-facebook fs-4"></i>
                                </a>
                                <a href="https://instagram.com/codeforall" class="text-white-50" 
                                   aria-label="Siga-nos no Instagram" target="_blank">
                                    <i class="bi bi-instagram fs-4"></i>
                                </a>
                                <a href="https://linkedin.com/company/codeforall" class="text-white-50" 
                                   aria-label="Siga-nos no LinkedIn" target="_blank">
                                    <i class="bi bi-linkedin fs-4"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div class="col-md-4 mb-3">
                            <h5>Sobre</h5>
                            <p class="text-white-50">
                                Code for All democratiza o acesso à educação em tecnologia, 
                                capacitando comunidades através de programas inclusivos.
                            </p>
                        </div>
                    </div>
                    
                    <hr class="bg-white-50">
                    
                    <div class="text-center text-white-50">
                        <p class="mb-0">&copy; 2025 Code for All. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        `;
  },

  /**
   * Atualiza a navegação ativa
   */
  updateActiveNav: (path) => {
    // Remove active de todos os links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    // Adiciona active ao link atual
    const activeLink = document.querySelector(`a[href="#${path}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  },
};
