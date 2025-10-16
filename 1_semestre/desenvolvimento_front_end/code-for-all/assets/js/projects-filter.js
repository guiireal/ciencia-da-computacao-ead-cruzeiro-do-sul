document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os "chips" de filtro e os cartões de projeto.
  const filterChips = document.querySelectorAll(".filter-chip");
  const projectCards = document.querySelectorAll(".project-card");

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // Remove a classe 'active' de todos os "chips" para desativar o estilo do filtro anterior.
      filterChips.forEach((c) => c.classList.remove("active"));

      chip.classList.add("active");

      const filter = chip.getAttribute("data-filter");

      projectCards.forEach((card) => {
        // Obtém a categoria do cartão a partir do atributo 'data-category'.
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.5s ease-in-out";
        } else {
          // Caso contrário, oculta o cartão.
          card.style.display = "none";
        }
      });
    });
  });
});

// Cria um elemento <style> dinamicamente.
const style = document.createElement("style");
// Adiciona as regras da animação CSS 'fadeIn' ao elemento <style>.
style.textContent = `
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
`;

// Insere o elemento <style> no cabeçalho (<head>) do documento.
// Isso torna a animação 'fadeIn' disponível para uso no JavaScript acima.
document.head.appendChild(style);
