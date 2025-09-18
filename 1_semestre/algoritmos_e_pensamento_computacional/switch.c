#include <stdio.h>
#include <locale.h>
#include <windows.h>

int main() {
    SetConsoleCP(CP_UTF8);
    SetConsoleOutputCP(CP_UTF8);
    setlocale(LC_ALL, ".UTF-8");

    int operation;

    float number1, number2;
    float result;

    printf("Escolha a operação (1-multiplicação, 2-divisão, 3-subtração, 4-adição): ");
    scanf("%d", &operation);

    printf("Digite o primeiro número: ");
    scanf("%f", &number1);

    printf("Digite o segundo número: ");
    scanf("%f", &number2);

    switch (operation) {
        case 1:
            result = number1 * number2;
            break;
        case 2:
            if (number2 != 0) {
                result = number1 / number2;
            } else {
                printf("Erro: Divisão por zero!\n");
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
            printf("Operacao inválida!\n");
            return 1;
    }

    printf("O resultado é: %.2f\n", result);

    return 0;
}
