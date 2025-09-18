#include <stdio.h>
#include <locale.h>
#include <windows.h>

int main() {
    // Só para imprimir com acentuação sem problemas
    SetConsoleOutputCP(CP_UTF8);
    SetConsoleCP(CP_UTF8);
    setlocale(LC_ALL, ".UTF-8");

    int age;
    float salary;

    printf("Digite sua idade: ");
    scanf("%d", &age);

    printf("Digite seu salário: ");
    scanf("%f", &salary);

    if (age >= 18) {
        if (salary >= 4000) {
            printf("Crédito aprovado com limite maior!");
        } else if (salary >= 2000) {
            printf("Crédito aprovado com limite menor!");
        } else {
            printf("Crédito reprovado! Salário não compatível!");
        }
    } else {
        printf("Crédito negado, você é menor de idade!");
    }

    return 0;
}
