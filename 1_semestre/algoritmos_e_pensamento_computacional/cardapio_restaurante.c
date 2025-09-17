#include <stdio.h>
#include <stdlib.h>

int main() {
    // Variáveis utilizadas
    int opcao;
    int bebida, prato, sobremesa;

    float total = 0;

    float desconto_preco_minimo = 25;
    int desconto_percentual = 10;

    // Boas vindas
    printf("Seja bem-vindo ao restaurante!\n");
    printf("Eu sou a Duda, assistente do cardapio digital!\n");

    do {
        // Categorias
        printf("\nEscolha uma categoria:\n");
        printf("1 - Bebidas\n");
        printf("2 - Pratos principais\n");
        printf("3 - Sobremesas\n");
        printf("4 - Finalizar pedido\n");
        printf("0 - Sair\n");
        printf("Opcao: ");

        scanf("%d", &opcao);

        system("cls");

        // Opções de cada categoria
        switch (opcao) {
            case 1:
                printf("\nEscolha uma bebida:\n");
                printf("1 - Agua (R$ 2,00)\n");
                printf("2 - Refrigerante (R$ 5,00)\n");
                printf("3 - Suco (R$ 4,00)\n");
                printf("0 - Voltar\n");
                printf("Opcao: ");

                scanf("%d", &bebida);

                switch (bebida) {
                    case 1:
                        total += 2;
                        printf("Agua adicionada ao pedido!\n");
                        break;
                    case 2:
                        total += 5;
                        printf("Refrigerante adicionada ao pedido!\n");
                        break;
                    case 3:
                        total += 4;
                        printf("Suco adicionada ao pedido!\n");
                        break;
                    case 0:
                        break;
                    default:
                        printf("Opcao invalida!\n");
                }
                break;

            case 2:
                printf("\nEscolha um prato principal:\n");
                printf("1 - Frango com arroz (R$ 15,00)\n");
                printf("2 - Bife com batata (R$ 20,00)\n");
                printf("3 - Massa (R$ 12,00)\n");
                printf("0 - Voltar\n");
                printf("Opcao: ");

                scanf("%d", &prato);

                switch (prato) {
                    case 1:
                        total += 15;
                        printf("Frango com arroz adicionado ao pedido!\n");
                        break;
                    case 2:
                        total += 20;
                        printf("Bife com batata adicionado ao pedido!\n");
                        break;
                    case 3:
                        total += 12;
                        printf("Massa adicionada ao pedido!\n");
                        break;
                    case 0:
                        break;
                    default:
                        printf("Opcao invalida!\n");
                }
                break;
            case 3:
                printf("\nEscolha uma sobremesa:\n");
                printf("1 - Pudim (R$ 8,00)\n");
                printf("2 - Sorvete (R$ 7,00)\n");
                printf("3 - Fruta (R$ 5,00)\n");
                printf("0 - Voltar\n");
                printf("Opcao: ");

                scanf("%d", &sobremesa);

                switch (sobremesa) {
                    case 1:
                        total += 8;
                        printf("Pudim adicionado ao pedido!\n");
                        break;
                    case 2:
                        total += 7;
                        printf("Sorvete adicionado ao pedido!\n");
                        break;
                    case 3:
                        total += 5;
                        printf("Fruta adicionada ao pedido!\n");
                        break;
                    case 0:
                        break;
                    default:
                        printf("Opcao invalida!\n");
                }
                break;
            case 4:
                if (total > 0) {
                    float total_com_desconto = total;

                    // Lógica do desconto
                    if (total > desconto_preco_minimo) {
                        total_com_desconto -= total * desconto_percentual / 100;
                        printf("\nDesconto de %d%% aplicado!\n", desconto_percentual);
                    }
                    printf("\nTotal do pedido: %.2f\n", total_com_desconto);
                } else {
                    printf("Nenhum item foi adicionado ao pedido.\n");
                }
                break;
            case 0:
                printf("Saindo...\n");
                break;
            default:
                printf("Opcao invalida!\n");
        }
    } while (opcao != 0);

    return 0;
}
