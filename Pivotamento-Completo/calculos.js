const calculos = () => {
    resetaVariaveis();
    valoresMatriz();
    try {
        gauss();
        retrosubstituicao();
        matriz2();
        mostrarMatriz();
        resultadosIndividuais();
    } catch (e) {
        pai = $('#solucoes');
        limpaDOM(pai);
        limpaDOM($('#matriz2'));
        mensagemDeErro();
    }
};

const resetaVariaveis = () => {
    matriz = new Array(ordem);
    v_solucoes = new Array();
    ordemVariaveis = [];
    for (i = 0; i < ordem; i++) {
        ordemVariaveis.push((i + 1));
    }
};

const valoresMatriz = () => {
    for (i = 0; i < ordem; i++) {
        matriz[i] = new Array();
        for (j = 0; j < ordem; j++) {
            matriz[i].push(Number($(`#a${i}a${j}`).value));
        }
        v_solucoes.push(Number($(`#a${i}a${ordem}`).value));
    }
};

const gauss = () => {
    for (i = 0; i < (ordem - 1); i++) {
        definirNovoPivo(i);
        for (j = i + 1; j < ordem; j++) {
            m = matriz[j][i] / matriz[i][i];
            if (matriz[i][i] === 0)
                throw new Error('divisão por 0');
            for (k = i + 1; k < ordem; k++) {
                matriz[j][k] = matriz[j][k] - m * matriz[i][k];
            }
            v_solucoes[j] = v_solucoes[j] - m * v_solucoes[i];
            matriz[j][i] = 0;
        }
    }
};

const definirNovoPivo = i => {
    let maior_linha = i, maior_coluna = i;

    for (j = i; j < ordem; j++) {
        for (k = i; k < ordem; k++) {
            if (valorAbsoluto(matriz[j][k]) > matriz[maior_linha][maior_coluna]) {
                maior_linha = j; maior_coluna = k;
            }
        }
    }
    trocaDeLinhas(maior_linha, i);
    trocaDeColunas(maior_coluna, i);
};

const trocaDeLinhas = (maior_linha, i) => {
    for (k = i; k < ordem; k++) {
        aux = matriz[i][k];
        matriz[i][k] = matriz[maior_linha][k];
        matriz[maior_linha][k] = aux;
    }
    aux = v_solucoes[i];
    v_solucoes[i] = v_solucoes[maior_linha];
    v_solucoes[maior_linha] = aux;
};

const trocaDeColunas = (maior_coluna, i) => {
    for (k = i; k < ordem; k++) {
        aux = matriz[k][i];
        matriz[k][i] = matriz[k][maior_coluna];
        matriz[k][maior_coluna] = aux;
    }
    aux = ordemVariaveis[i];
    ordemVariaveis[i] = ordemVariaveis[maior_coluna];
    ordemVariaveis[maior_coluna] = aux;
};

const retrosubstituicao = () => {
    aux = new Array(ordem);
    if (matriz[ordem - 1][ordem - 1] === 0)
        throw new Error('divisão por 0');
    aux[ordem - 1] = v_solucoes[ordem - 1] / matriz[ordem - 1][ordem - 1];
    for (i = ordem - 2; i >= 0; i--) {
        soma = 0;
        for (j = i + 1; j < ordem; j++)
            soma += matriz[i][j] * aux[j];
        if (matriz[i][i] === 0)
            throw new Error('divisão por 0');
        aux[i] = (v_solucoes[i] - soma) / matriz[i][i];
    }
    objetoMatriz(aux);
};

const valorAbsoluto = valor => {
    if (valor < 0) return valor * -1;
    else return valor;
};

const objetoMatriz = res => {
    objetoSolucoes = new Array();
    for (i = 0; i < v_solucoes.length; i++) {
        objetoSolucoes.push({ id: ordemVariaveis[i], valor: res[i] });
    }
};