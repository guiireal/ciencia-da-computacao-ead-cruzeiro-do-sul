#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <windows.h>
#include <string.h>

#define MAX_PRODUTOS 10

/**
 * Protótipo das funções
 */
void bubbleSort(float precos[], char produtos[][50], int tamanho, int ordem);

int main() {
    // Configuração para suportar caracteres especiais no Windows 11
    SetConsoleOutputCP(CP_UTF8);
    SetConsoleCP(CP_UTF8);
    setlocale(LC_ALL, ".UTF-8");

    char produtos[MAX_PRODUTOS][50];
    float precos[MAX_PRODUTOS];
    int ordem;

    printf("Bem vindo ao mercado Nova Esperança!\n\n");

    for (int i = 0; i < MAX_PRODUTOS; i++) {
        printf("Digite o nome do produto %d: ", i + 1);
        scanf("%s", produtos[i]);
        printf("Digite o preço do produto %d: ", i + 1);
        scanf("%f", &precos[i]);
    }

    printf("\nPreço dos produtos\n\n");

    for (int i = 0; i < MAX_PRODUTOS; i++) {
        printf("Produto: %s - Preço: R$ %.2f\n", produtos[i], precos[i]);
    }

    printf("\nEscolha a ordem de exibição dos produtos pelo preço:\n");
    printf("1 - Crescente\n");
    printf("0 - Decrescente\n");
    printf("Opção: ");

    scanf("%d", &ordem);

    bubbleSort(precos, produtos, MAX_PRODUTOS, ordem);

    return 0;
}

/**
 * Ordena os produtos pelo preço utilizando o algoritmo Bubble Sort.
 *
 * @param precos Vetor de preços dos produtos.
 * @param produtos Matriz de nomes dos produtos.
 * @param tamanho Tamanho dos vetores.
 * @param ordem Ordem de ordenação: 1 para crescente, 0 para decrescente.
 */
void bubbleSort(float precos[], char produtos[][50], int tamanho, int ordem) {
    int i, j;
    float temp_preco;
    char temp_produto[50];
    int trocou;

    for (i = 0; i < tamanho - 1; i++) {
        trocou = 0;

        for (j = 0; j < tamanho - i - 1; j++) {
            // Condicional pra saber a ordem de ordenação (crescente ou decrescente)
            int condicao = ordem == 1 ? (precos[j] > precos[j + 1]) : (precos[j] < precos[j + 1]);

            // Parte onde ocorrem as trocas
            if (condicao) {
                temp_preco = precos[j];
                precos[j] = precos[j + 1];
                precos[j + 1] = temp_preco;

                strcpy(temp_produto, produtos[j]);
                strcpy(produtos[j], produtos[j + 1]);
                strcpy(produtos[j + 1], temp_produto);

                trocou = 1;
            }
        }

        if (trocou == 0) {
            break;
        }
    }

    printf("\nProdutos ordenados pelo preço (%s):\n\n", ordem == 1 ? "Crescente" : "Decrescente");

    for (i = 0; i < tamanho; i++) {
        printf("Produto: %s - Preço: R$ %.2f\n", produtos[i], precos[i]);
    }
}
