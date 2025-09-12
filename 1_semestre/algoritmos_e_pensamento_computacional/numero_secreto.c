#include <stdio.h>

int main()
{
    int numero_secreto = 7;
    int chute;

    printf("Digite o seu chute: ");
    scanf("%d", &chute);

    while (chute != numero_secreto)
    {
        printf("Voce errou garotinho! Tente novamente: ");
        scanf("%d", &chute);
    }

    printf("Parabens! Voce acertou o numero secreto: %d\n", numero_secreto);
    return 0;
}