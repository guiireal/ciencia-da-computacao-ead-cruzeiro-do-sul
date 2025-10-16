/**
 * Sistema de Validação de Formulários
 * Validação em tempo real com feedback visual
 */

const Validation = {
  /**
   * Inicializa a validação de um formulário
   */
  init: (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;

    // Validação em tempo real nos inputs
    form.querySelectorAll("input, textarea, select").forEach((input) => {
      input.addEventListener("blur", () => {
        Validation.validateField(input);
      });

      input.addEventListener("input", () => {
        if (input.classList.contains("is-invalid")) {
          Validation.validateField(input);
        }
      });
    });

    // Validação no submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (Validation.validateForm(form)) {
        Validation.handleSubmit(form);
      }
    });
  },

  /**
   * Valida um campo individual
   */
  validateField: (input) => {
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = "";

    // Validações específicas por tipo
    if (input.hasAttribute("required") && !value) {
      isValid = false;
      errorMessage = "Este campo é obrigatório.";
    } else if (input.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = "Por favor, digite um e-mail válido.";
      }
    } else if (input.hasAttribute("minlength")) {
      const minLength = parseInt(input.getAttribute("minlength"));
      if (value.length < minLength) {
        isValid = false;
        errorMessage = `Mínimo de ${minLength} caracteres.`;
      }
    } else if (input.hasAttribute("pattern")) {
      const pattern = new RegExp(input.getAttribute("pattern"));
      if (!pattern.test(value)) {
        isValid = false;
        errorMessage = "Formato inválido.";
      }
    } else if (input.type === "number") {
      const min = input.getAttribute("min");
      const max = input.getAttribute("max");
      const numValue = parseFloat(value);

      if (min && numValue < parseFloat(min)) {
        isValid = false;
        errorMessage = `Valor mínimo: ${min}`;
      } else if (max && numValue > parseFloat(max)) {
        isValid = false;
        errorMessage = `Valor máximo: ${max}`;
      }
    }

    // Validação de data de nascimento (idade entre 18 e 100 anos)
    if (input.id === "dataNascimento" && value) {
      const birthDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 18 || age > 100) {
        isValid = false;
        errorMessage = "Idade deve estar entre 18 e 100 anos.";
      }
    }

    // Aplica classes de validação
    if (isValid) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");

      // Atualiza mensagem de erro
      const feedback = input.nextElementSibling;
      if (feedback && feedback.classList.contains("invalid-feedback")) {
        feedback.textContent = errorMessage;
      }
    }

    return isValid;
  },

  /**
   * Valida todo o formulário
   */
  validateForm: (form) => {
    let isValid = true;

    // Valida todos os campos
    form.querySelectorAll("input, textarea, select").forEach((input) => {
      if (!Validation.validateField(input)) {
        isValid = false;
      }
    });

    // Validação especial para checkboxes de disponibilidade (formulário de cadastro)
    if (form.id === "cadastroForm") {
      const checkboxes = form.querySelectorAll(
        'input[name="disponibilidade"]:checked'
      );
      if (checkboxes.length === 0) {
        isValid = false;
        const errorDiv = document.getElementById("disponibilidadeError");
        if (errorDiv) {
          errorDiv.style.display = "block";
          errorDiv.classList.add("text-danger");
        }
      } else {
        const errorDiv = document.getElementById("disponibilidadeError");
        if (errorDiv) {
          errorDiv.style.display = "none";
        }
      }
    }

    return isValid;
  },

  /**
   * Manipula o envio do formulário
   */
  handleSubmit: (form) => {
    // Mostra spinner
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) spinner.classList.add("active");

    // Simula envio para API
    setTimeout(() => {
      // Esconde spinner
      if (spinner) spinner.classList.remove("active");

      // Coleta dados do formulário
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Salva no localStorage
      const formType = form.id.replace("Form", "");
      const submissions = JSON.parse(localStorage.getItem(formType) || "[]");
      submissions.push({
        ...data,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem(formType, JSON.stringify(submissions));

      // Mostra mensagem de sucesso
      Validation.showSuccessMessage(form);

      // Limpa o formulário
      form.reset();
      form.querySelectorAll(".is-valid, .is-invalid").forEach((el) => {
        el.classList.remove("is-valid", "is-invalid");
      });
    }, 1500);
  },

  /**
   * Exibe mensagem de sucesso
   */
  showSuccessMessage: (form) => {
    const messages = {
      cadastroForm:
        "Inscrição enviada com sucesso! Entraremos em contato em breve.",
      doacaoForm:
        "Obrigado pela sua doação! Você receberá um e-mail de confirmação.",
      contatoForm:
        "Mensagem enviada com sucesso! Responderemos em até 48 horas.",
      newsletterForm:
        "Inscrição realizada! Verifique seu e-mail para confirmar.",
    };

    const message = messages[form.id] || "Enviado com sucesso!";

    // Cria alert do Bootstrap
    const alert = document.createElement("div");
    alert.className =
      "alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3";
    alert.style.zIndex = "9999";
    alert.innerHTML = `
            <i class="bi bi-check-circle-fill me-2"></i>${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

    document.body.appendChild(alert);

    // Remove após 5 segundos
    setTimeout(() => {
      alert.remove();
    }, 5000);
  },

  /**
   * Aplica máscara aos inputs
   */
  applyMask: (input, mask) => {
    input.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      let maskedValue = "";

      if (mask === "cpf") {
        // 000.000.000-00
        maskedValue = value
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})/, "$1-$2")
          .replace(/(-\d{2})\d+?$/, "$1");
      } else if (mask === "telefone") {
        // (00) 00000-0000
        maskedValue = value
          .replace(/^(\d{2})(\d)/g, "($1) $2")
          .replace(/(\d)(\d{4})$/, "$1-$2");
      } else if (mask === "cep") {
        // 00000-000
        maskedValue = value.replace(/^(\d{5})(\d)/, "$1-$2");
      }

      e.target.value = maskedValue;
    });
  },

  /**
   * Inicializa máscaras nos formulários
   */
  initMasks: () => {
    const cpfInput = document.getElementById("cpf");
    if (cpfInput) Validation.applyMask(cpfInput, "cpf");

    const telefoneInput = document.getElementById("telefone");
    if (telefoneInput) Validation.applyMask(telefoneInput, "telefone");

    const cepInput = document.getElementById("cep");
    if (cepInput) Validation.applyMask(cepInput, "cep");
  },
};
