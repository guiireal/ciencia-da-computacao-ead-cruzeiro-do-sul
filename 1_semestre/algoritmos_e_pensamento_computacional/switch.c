#include <stdio.h>

int main() {
    int operation;

    float number1, number2;
    float result;

    printf("Escolha a operacao (1-multiplicacao, 2-divisao, 3-subtracao, 4-adicao): ");
    scanf("%d", &operation);

    printf("Digite o primeiro numero: ");
    scanf("%f", &number1);

    printf("Digite o segundo numero: ");
    scanf("%f", &number2);

    switch (operation) {
        case 1:
            result = number1 * number2;
            break;
        case 2:
            if (number2 != 0) {
                result = number1 / number2;
            } else {
                printf("Erro: Divisao por zero!\n");
                return 1;
            }
            break;
        case 3:
            result = number1 - number2;
            break;
        case 4:
            result = number1 + number2;
            break;
        default:
            printf("Operacao invalida!\n");
            return 1;
    }

    printf("O resultado e: %.2f\n", result);

    return 0;
}
