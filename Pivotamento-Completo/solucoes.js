const resultadosIndividuais = () => {
    pai = $('#solucoes');
    criaTitulo('Resultados:');
    objetoSolucoes = ordenaResultados(objetoSolucoes);
    solucoes();
};

const solucoes = () => {
    for (i = 0; i < ordem; i++) {
        criaNomeVariavel(i);
        criaIndice(0, 0, `${objetoSolucoes[i].valor}`);
        criaQuebraDeLinha();
    }
};

const ordenaResultados = arr => (
    arr.sort((a, b) => a.id < b.id ? -1 : +1)
);

