#include <stdio.h>

int main() {
    int number;

    printf("Digite um numero: ");
    scanf("%d", &number);

    while (number >= 0) {
        printf("%d ", number);
        number--;
    }

    printf("Fim da contagem!");

    return 0;
}
