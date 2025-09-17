#include <stdio.h>
#include <locale.h>
#include <windows.h>

int main() {
    SetConsoleOutputCP(CP_UTF8);
    SetConsoleCP(CP_UTF8);
    setlocale(LC_ALL, ".UTF-8");

    printf("Teste emoji 🚀 e com çedilha");

    return 0;
}
