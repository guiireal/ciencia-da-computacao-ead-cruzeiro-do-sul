#include <stdio.h>
#include <stdlib.h>

/*
 * Prototipos das funções
 */
void boas_vindas();
char *dia_da_semana(int dia);
void mostrar_resultados(int carros_por_dia[], int total_semanal);

int main()
{
    /*
     * Dias da semana
     *
     * 0 - Domingo
     * 1 - Segunda
     * 2 - Terça
     * 3 - Quarta
     * 4 - Quinta
     * 5 - Sexta
     * 6 - Sábado
     */
    int dias_semana[7] = {0, 1, 2, 3, 4, 5, 6};
    int carros_por_dia[7] = {0, 0, 0, 0, 0, 0, 0};

    int total_carros;
    int total_semanal = 0;

    boas_vindas();

    for (int i = 0; i < 7; i++)
    {
        printf("Digite o numero de carros que passaram no dia da semana %s: ", dia_da_semana(dias_semana[i]));
        scanf("%d", &total_carros);
        carros_por_dia[i] = total_carros;
        total_semanal += total_carros;
    }

    mostrar_resultados(carros_por_dia, total_semanal);

    return 0;
}

/*
 * Mostra mensagem de boas vindas
 */
void boas_vindas()
{
    printf("Bem-vindo ao sistema de calculo de pedagio!\n");
    printf("Aqui voce pode registrar quantos carros passaram pelo pedagio em cada dia da semana.\n");
    printf("No final, mostraremos quantos carros passaram em cada dia da semana, o total semanal e deixaremos em vermelho e negrito o dia de maior pico.\n");
}

/*
 * Retorna o nome do dia da semana baseado no numero
 */
char *dia_da_semana(int dia)
{
    switch (dia)
    {
    case 0:
        return "Domingo";
    case 1:
        return "Segunda";
    case 2:
        return "Terca";
    case 3:
        return "Quarta";
    case 4:
        return "Quinta";
    case 5:
        return "Sexta";
    case 6:
        return "Sabado";
    default:
        return "Dia invalido";
    }
}

/*
 * Mostra os resultados da semana, destacando o dia de maior pico
 */
void mostrar_resultados(int carros_por_dia[], int total_semanal)
{
    int maior_pico = 0;
    int dia_maior_pico = -1;

    printf("\nResultados da semana:\n");
    for (int i = 0; i < 7; i++)
    {
        if (carros_por_dia[i] > maior_pico)
        {
            maior_pico = carros_por_dia[i];
            dia_maior_pico = i;
        }
    }

    for (int i = 0; i < 7; i++)
    {
        if (i == dia_maior_pico)
        {
            // ANSI escape codes para vermelho e negrito
            printf("\033[1;31m%s: %d carros\033[0m\n", dia_da_semana(i), carros_por_dia[i]);
        }
        else
        {
            printf("%s: %d carros\n", dia_da_semana(i), carros_por_dia[i]);
        }
    }

    printf("Total semanal: %d carros\n", total_semanal);
}