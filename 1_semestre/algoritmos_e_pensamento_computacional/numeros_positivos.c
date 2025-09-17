#include <stdio.h>

int main() {
    int numero;
    int soma = 0;

    printf("Digite um numero positivo (ou 0 para sair): ");
    scanf("%d", &numero);

    while (numero != 0) {
        soma += numero;
        printf("Digite um numero positivo (ou 0 para sair): ");
        scanf("%d", &numero);
    }

    printf("A soma dos numeros positivos eh: %d", soma);

    return 0;
}
