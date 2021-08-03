import { Dimensions } from 'react-native';
/**
 * Parâmtros do jogo
 */
const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRation: 0.15, // Proporção do painel superior na tela
    difficultLevel: 0.1,
    /**
     * Quantidade de colunas
     */
    get getColumnsAmount() {
        const WIDTH = Dimensions.get('window').width;
        return Math.floor(WIDTH / this.blockSize);
    },
    /**
     * Quantidade de linhas
     */
    get getRowAmount() {
        const TOTAL_HEIGHT = Dimensions.get('window').height;
        const BOARDER_HEIGHT = TOTAL_HEIGHT * (1 - this.headerRation);
        return Math.floor(BOARDER_HEIGHT / this.blockSize);
    }
};


export default params;