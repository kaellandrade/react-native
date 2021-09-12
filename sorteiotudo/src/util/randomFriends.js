const randonIndex = (arrayLength) => {
    const index = Math.floor(Math.random() * arrayLength);
    return index;
}
/**
 * Algoritmo de Fisher–Yates O(n)
 */
function randomFrinds([...array]) {
    for (let i = array.length - 1; i >= 0; i--) {
        let myIndexRand = randonIndex(array.length);
        [array[i], array[myIndexRand]] = [array[myIndexRand], array[i]];
    }
    return array;
}


/**
 * Recebe um alista de amigos embaralhada e monta os pares de amigos.
 */
const paresAmigos = randomFrinds(amigosCadastrados).map((amigo, index, array) => {
    if (array[index + 1])
        return { ...amigo, amigoSecreto: array[index + 1] }
    else
        return { ...amigo, amigoSecreto: array[0] }
})