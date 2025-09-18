#include <stdio.h>

int main()
{
    int idade_permitida = 18;
    int idade;
    int cadastro_valido = 1;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    if (idade >= idade_permitida && cadastro_valido == 1)
    {
        printf("Idade %d ok e cadastro valido!.\n", idade);
    }
    else if (idade < idade_permitida)
    {
        printf("Idade %d nao permitida!.\n", idade);
    }
    else
    {
        printf("Cadastro invalido!.\n");
    }

    return 0;
}