#include <stdio.h>

int main()
{
    int numeros[5] = {10, 20, 30, 40, 50};

    int primeiro = numeros[0];

    /**
     * Explicação:
     *
     * sizeof(numeros) retorna o tamanho total do array em bytes.
     * sizeof(numeros[0]) retorna o tamanho de um único elemento do array em
     *
     * Logo:
     *
     * sizeof(numeros) = 20
     * sizeof(numeros[0]) = 4
     *
     * 20 / 4 - 1 = 4
     *
     * O índice do último elemento é 4, porque os índices começam em 0.
     */
    int ultimo = numeros[sizeof(numeros) / sizeof(numeros[0]) - 1];

    printf("Primeiro: %d\n", primeiro);
    printf("Ultimo: %d\n", ultimo);

    return 0;
}