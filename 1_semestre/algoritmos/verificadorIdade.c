#include <stdio.h>
#include <locale.h>
#include <windows.h>

int main(void) {
    SetConsoleOutputCP(CP_UTF8);
    SetConsoleCP(CP_UTF8);
    setlocale(LC_ALL, ".UTF-8");

    int idade;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    if (idade >= 18 && idade <= 65) {
        printf("O voto é obrigatório!\n");
    } else {
        printf("O voto não é obrigatório!\n");
    }

    return 0;
}
