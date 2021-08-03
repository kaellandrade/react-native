import React, { Component } from 'react';
import { StyleSheet, Vibration, View, Alert, } from 'react-native';
import params from './src/params';
import { createMineBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag, lengthFlag } from './src/logicaJogo';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSlection from './src/screens/LevelSelection';
const SECONDS = {
  EXPLOSION_VIBRATION: 1000,
  FLAGD_ADD: 50

};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }
  /**
   * Retonar a quantidades de minas no tabuleiro
   */

  get minesAmount() {
    const COLS = params.getColumnsAmount;
    const ROWS = params.getRowAmount;
    return Math.ceil(COLS * ROWS * params.difficultLevel);
  }
  /**
   * Retornar o estado do jogo;
   */
  createState = _ => {
    const COLS = params.getColumnsAmount;
    const ROWS = params.getRowAmount;
    return {
      board: createMineBoard(ROWS, COLS, this.minesAmount),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }


  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Game-Over!', 'Sinto Muito.');
      Vibration.vibrate(SECONDS.EXPLOSION_VIBRATION)
    }
    if (won) {
      Alert.alert('LOL!', 'Você Venceu!')
    }
    this.setState({ board, lost, won });

  }
  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);
    Vibration.vibrate(SECONDS.FLAGD_ADD);
    if (won) {
      Alert.alert('LOL!', 'Você Venceu!')
    }
    this.setState({ board, won })

  }

  onLevelSelected = level => {
    params.difficultLevel = level;
    this.setState(this.createState());
  }

  render() {
    return (
      <View style={styles.container}>
        <LevelSlection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={_ => this.setState({ showLevelSelection: false })}
        />
        <Header onFlagPress={_ => this.setState({ showLevelSelection: true })} flagsLeft={this.minesAmount - lengthFlag(this.state.board)} onNewGame={_ => this.setState(this.createState())} />
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});


export default App;
