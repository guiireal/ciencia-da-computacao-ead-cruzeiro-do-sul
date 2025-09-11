#include <stdio.h>

int main()
{
    int numeroSecreto = 7;
    int chute;

    printf("Digite o seu chute: ");
    scanf("%d", &chute);

    while (chute != numeroSecreto)
    {
        printf("Voce errou garotinho! Tente novamente: ");
        scanf("%d", &chute);
    }

    printf("Parabens! Voce acertou o numero secreto: %d\n", numeroSecreto);
    return 0;
}