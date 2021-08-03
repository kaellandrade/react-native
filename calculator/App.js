
import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Btn from './src/components/Btn';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0

}

class App extends Component {
  state = { ...initialState }

  addDigit = number => {

    const CLEAR_DISPLAY = this.state.displayValue === '0' || this.state.clearDisplay;

    if (number == '.' && !CLEAR_DISPLAY && this.state.displayValue.includes('.')) {
      return;
    }

    const CURRENT_VALUE = CLEAR_DISPLAY ? '' : this.state.displayValue;
    const DISPLAY_VALUE = String(CURRENT_VALUE) + String(number);
    this.setState({ displayValue: DISPLAY_VALUE, clearDisplay: false });

    if (number !== '.') {
      const NEW_VALUE = parseFloat(DISPLAY_VALUE);
      const VALORES = [...this.state.values];
      VALORES[this.state.current] = NEW_VALUE;
      this.setState({ values: VALORES });
    }

  }

  clearMemory = _ => {
    this.setState({ ...initialState });
  }

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });

    } else {
      const EQUALS = operation === '=';
      const VALUES = [...this.state.values];
      try {
        VALUES[0] = eval(`${VALUES[0]} ${this.state.operation} ${VALUES[1]}`);
      } catch (e) {
        VALUES[0] = this.state.values[0];
      }

      VALUES[1] = 0;
      this.setState({
        displayValue: String(VALUES[0]),
        operation: EQUALS ? null : operation,
        current: EQUALS ? 0 : 1,
        clearDisplay: !EQUALS,
        values: VALUES
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Btn onClick={this.clearMemory} triple label={'AC'} />
          <Btn operation onClick={this.setOperation} label={'/'} />
          <Btn label={'7'} onClick={this.addDigit} />
          <Btn label={'8'} onClick={this.addDigit} />
          <Btn label={'9'} onClick={this.addDigit} />
          <Btn operation label={'*'} onClick={this.setOperation} />
          <Btn label={'4'} onClick={this.addDigit} />
          <Btn label={'5'} onClick={this.addDigit} />
          <Btn label={'6'} onClick={this.addDigit} />
          <Btn operation label={'-'} onClick={this.setOperation} />
          <Btn label={'1'} onClick={this.addDigit} />
          <Btn label={'2'} onClick={this.addDigit} />
          <Btn label={'3'} onClick={this.addDigit} />
          <Btn operation label={'+'} onClick={this.setOperation} />
          <Btn double label={'0'} onClick={this.addDigit} />
          <Btn label={'.'} onClick={this.addDigit} />
          <Btn operation label={'='} onClick={this.setOperation} />
        </View>
      </View>
    );
  };
}


export default App;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  container: {
    flex: 1
  }
});