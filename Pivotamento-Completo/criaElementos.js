let pai, ordem;

const criaMatriz = () => {
    for (i = 0; i < ordem; i++) {
        for (j = 0; j < ordem; j++) {
            criaIndice(i, j, '');
        }
        criaEspaco();
        criaIndice(i, ordem, '');
        criaQuebraDeLinha();
    }
    criaQuebraDeLinha();
};

const criaIndice = (i, j, valor) => {
    let no = document.createElement('input');
    no.setAttribute('type', 'number');
    no.setAttribute('required', 'true');
    no.setAttribute('value', valor);
    if (valor === '')
        no.setAttribute('id', 'a' + i + 'a' + j);
    else
        no.setAttribute('readOnly', 'true');
    pai.appendChild(no);
};

const criaEspaco = () => {
    let espaco = document.createElement('a');
    let frase = document.createTextNode('xxx');
    espaco.style.opacity = '0.0'
    espaco.appendChild(frase);
    pai.appendChild(espaco);
};

const criaQuebraDeLinha = () => {
    br = document.createElement('br');
    pai.appendChild(br);
};

const criaTitulo = string => {
    let h3 = document.createElement('h3');
    let strong = document.createElement('strong');
    let frase = document.createTextNode(string);
    strong.appendChild(frase);
    h3.appendChild(strong);
    pai.appendChild(h3);
};

const criaBotoes = () => {
    let calc = document.createElement('input');
    calc.setAttribute('type', 'submit');
    calc.setAttribute('value', 'calcular');
    pai.appendChild(calc);
    let auto = document.createElement('input');
    auto.setAttribute('type', 'button');
    auto.setAttribute('value', 'valores aleatorios');
    auto.setAttribute('onclick', 'valoresAleatorios()');
    pai.appendChild(auto);
};

const limpaDOM = componente => {
    while (componente.hasChildNodes()) componente.removeChild(componente.firstChild);
};

const mensagemDeErro = () => {
    let x = document.createElement('a');
    tn = document.createTextNode('A matriz inserida não possui solução única!');
    x.appendChild(tn);
    pai.appendChild(document.createElement('br'));
    pai.appendChild(x);
};

const criaNomeVariavel = i => {
    let a = document.createElement('a');
    let tn = document.createTextNode(`x${objetoSolucoes[i].id}: `);
    a.appendChild(tn);
    pai.appendChild(a);
};