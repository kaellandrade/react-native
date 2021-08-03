/**
 * 
 * @param {*} rows quantidade de linhas 
 * @param {*} columns quantidade de colunas
 * @returns Retorna um tabuleiro N X M
 */
const createBoard = (rows, columns) => {
    let board = Array(rows).fill(null).map(_ => []);
    for (let row = 0; row < rows; row++)
        for (let column = 0; column < columns; column++) {
            board[row].push({
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            });

        }
    return board;
}
/**
 * 
 * @param {*} board Recebe um tabuleiro e o retorna minado
 * @param {*} minesAmount Quantidades de minas para espalhar
 */
const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;
    let minesPlated = 0;

    while (minesPlated < minesAmount) {
        const rowSel = Math.floor(Math.random() * rows);
        const colSel = Math.floor(Math.random() * columns);
        const localeMine = board[rowSel][colSel];

        if (!localeMine.mined) {
            localeMine.mined = true;
            minesPlated++;
        }
    }
}
/**
 * 
 * @param {*} rows Quantidade de linhas do tabuleiro;
 * @param {*} columns Quantidade de colunas do tabuleiro;
 * @param {*} minesAmount  Quantidades de minas para espalhar;
 * @returns Retonar um tabuleiro minado
 */
const createMineBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
}
/**
 * Clona um tabuleiro passado como parâmetro
 */
const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => ({ ...field }))
    });
}
/**
 * Captura os vizinhos de um Filed dado um tabuleiro sua linha e sua respectiva coluna;
 */
const getNeighbors = (board, row, column) => {
    const getNeighbors = [];
    const rows = [row - 1, row, row + 1];
    const columns = [column - 1, column, column + 1];
    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || c !== column;
            const validRow = r >= 0 && r < board.length;
            const validColumn = c >= 0 && c < board[0].length;
            if (different && validRow && validColumn)
                getNeighbors.push(board[r][c]);
        })
    });
    return getNeighbors;
}
/**
 * Verifica os vizinhos de um dado nó é segura;
 */
const safeNeighbors = (board, row, column) => {
    return getNeighbors(board, row, column).reduce((acc, atual) => (acc && !atual.mined), true);
}
/**
 * Abrindo o campo;
 */
const openField = (board, row, column) => {
    const field = board[row][column]
    if (!field.opened) {
        field.opened = true;
        if (field.mined) {
            field.exploded = true;
        } else if (safeNeighbors(board, row, column)) {
            getNeighbors(board, row, column)
                .forEach(n => {
                    openField(board, n.row, n.column);
                })
        } else {
            const neighbors = getNeighbors(board, row, column);
            field.nearMines = neighbors.filter(n => n.mined).length;
        }
    }

}

/**
 * Retorna os campos de forma linear
 */
const fields = board => [].concat(...board);


/**
 * Verifica se há campo explodido;
 */
const hadExplosion = board => fields(board).some(fi => fi.exploded);

/**
 * Verifica se um campo está pendente
 */

const pedding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened);

/**
 * Verifica se o usuário ganhou o jogo;
 */
const wonGame = board => !fields(board).some(pedding); // TODO: ou .filter(pedding).length == 0

/**
 * Exibe todos os campos minados;
 */
const showMines = board => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true);

/**
 * Marca campo combandeira
 */
const invertFlag = (board, row, column) => {
    const field = board[row][column];
    field.flagged = !field.flagged;
}
/**
 * Calcula total de Flags marcadas
 */
const lengthFlag = board =>
    fields(board).filter(field => field.flagged).length;

export { createMineBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag, lengthFlag };