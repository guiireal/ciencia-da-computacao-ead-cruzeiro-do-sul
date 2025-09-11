#include <stdio.h>

int main()
{
    int idadePermitida = 18;
    int idade;
    int cadastroValido = 1;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    if (idade >= idadePermitida && cadastroValido == 1)
    {
        printf("Idade %d ok e cadastro valido!.\n", idade);
    }
    else if (idade < idadePermitida)
    {
        printf("Idade %d nao permitida!.\n", idade);
    }
    else
    {
        printf("Cadastro invalido!.\n");
    }

    return 0;
}