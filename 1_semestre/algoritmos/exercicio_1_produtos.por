programa {
    const inteiro QTDE_PRODUTOS = 3

    funcao inicio() {
        cadeia nome, situacao, observacao, sinal
        real preco_anterior, preco_atual, variacao

        escreva("Monitoramento de Preços\n")

        para (inteiro i = 1; i <= QTDE_PRODUTOS; i++) {
            escreva("\n")
            escreva("Produto ", i, " - nome: ")
            leia(nome)

            escreva("Preço no mês ANTERIOR (R$): ")
            leia(preco_anterior)

            escreva("Preço no mês ATUAL (R$): ")
            leia(preco_atual)

            se (preco_anterior == 0) {
                variacao = 0
            } senao {
                variacao = ((preco_atual - preco_anterior) / preco_anterior) * 100
            }

            se (variacao > 0) {
                situacao = "AUMENTO"
            } senao se (variacao < 0) {
                situacao = "QUEDA"
            } senao {
                situacao = "ESTÁVEL"
            }

            se (situacao == "AUMENTO" e variacao > 10) {
                observacao = "Aumento abusivo"
            } senao se (situacao == "AUMENTO" e variacao == 10) {
                observacao = "Limite de aumento"
            } senao se (situacao == "QUEDA") {
                observacao = "Redução de preço"
            } senao {
                observacao = "Estável"
            }

            se (variacao >= 0) { 
                sinal = "+" 
            } senao { 
                sinal = "" 
            }

            escreva("----------------------------------------------\n")
            escreva("Produto:   ", nome, "\n")
            escreva("Anterior: R$ ", preco_anterior, "\n")
            escreva("Atual: R$ ", preco_atual, "\n")
            escreva("Variação: ", sinal, variacao, "%\n")
            escreva("Situação: ", situacao, "\n")
            escreva("Observação: ", observacao, "\n")
        }

        escreva("----------------------------------------------\n")
    }
}
