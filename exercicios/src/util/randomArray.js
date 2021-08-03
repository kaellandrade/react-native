/* Gera um array de numeros aleatórios
TODO: NÃO ESTÁ COMPLETA
*/
const geraNumeros = (qtd = 1, min = 1, max = 60) => {
    const MIN = min;
    const MAX = max;

    const numeros = new Set();
    while (numeros.size < parseInt(qtd)) {
        let random = Math.floor(Math.random() * (MAX - MIN) + 1) + 1;
        numeros.add(random);
    }
    return [...numeros];
}

export default geraNumeros;