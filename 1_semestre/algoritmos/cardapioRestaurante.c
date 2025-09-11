#include <stdio.h>
#include <stdlib.h>

int main()
{
    int opcao;
    int bebida, prato, sobremesa;
    float precoBebida, precoPrato, precoSobremesa;
    float total;
    int descontoPrecoMinimo = 30;
    int descontoPercentual = 10;

    printf("Seja bem-vindo ao restaurante!\n");
    printf("Eu sou a Duda, assistente do cardapio digital\n");

    do
    {
        printf("\nEscolha uma categoria:\n");
        printf("1 - Bebidas\n");
        printf("2 - Pratos principais\n");
        printf("3 - Sobremesas\n");
        printf("0 - Sair\n");
        printf("Opcao: ");

        scanf("%d", &opcao);

        system("cls");

        switch (opcao)
        {
        case 1:
            printf("\nEscolha uma bebida:\n");
            printf("1 - Agua (R$ 2)\n");
            printf("2 - Refrigerante (R$ 5)\n");
            printf("3 - Suco (R$ 4)\n");
            printf("Opcao: ");
            scanf("%d", &bebida);

            switch (bebida)
            {
            case 1:
                precoBebida = 2;
                break;
            case 2:
                precoBebida = 5;
                break;
            case 3:
                precoBebida = 4;
                break;
            default:
                printf("Opção invalida!\n");
                precoBebida = 0;
                break;
            }
            break;
        case 2:
            printf("\nEscolha um prato principal:\n");
            printf("1 - Frango com arroz (R$ 15,00)\n");
            printf("2 - Bife com batata (R$ 20,00)\n");
            printf("3 - Massa (R$ 12,00)\n");
            printf("Opcao: ");

            scanf("%d", &prato);

            switch (prato)
            {
            case 1:
                precoPrato = 15;
                break;
            case 2:
                precoPrato = 20;
                break;
            case 3:
                precoPrato = 12;
                break;
            default:
                printf("Opção inválida!\n");
                precoPrato = 0;
                break;
            }
            break;
        case 3:
            printf("\nEscolha uma sobremesa:\n");
            printf("1 - Pudim (R$ 8,00)\n");
            printf("2 - Sorvete (R$ 7,00)\n");
            printf("3 - Fruta (R$ 5,00)\n");
            printf("Opcao: ");
            scanf("%d", &sobremesa);

            switch (sobremesa)
            {
            case 1:
                precoSobremesa = 8;
                break;
            case 2:
                precoSobremesa = 7;
                break;
            case 3:
                precoSobremesa = 5;
                break;
            default:
                printf("Opcao invalida!\n");
                precoSobremesa = 0;
                break;
            }
            break;
        case 0:
            printf("Saindo...\n");
            break;
        default:
            printf("Opcao invalida!\n");
            break;
        }

        if (opcao >= 1 && opcao <= 3)
        {
            total = precoBebida + precoPrato + precoSobremesa;

            if (total > descontoPrecoMinimo)
            {
                total -= total * descontoPercentual / 100;
            }

            printf("\nTotal do pedido: R$ %.2f\n", total);

            if (total > descontoPrecoMinimo)
            {
                printf("Desconto de %d%% aplicado!\n", descontoPercentual);
            }
        }
    } while (opcao != 0);

    return 0;
}