import React, { Component } from "react";
import Header from "./src/components/Header";
import { View } from 'react-native';
import Post from "./src/components/Post";

import imgFixa from './assets/imgs/fence.jpg';
const comentatiosTeste = [
  { nickname: 'micael', comment: 'Imagem Linda!' },
  { nickname: 'marcos', comment: 'Que lindo!' },
  { nickname: 'manoel', comment: 'horrível' }
]

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={imgFixa} comments={comentatiosTeste} />
      </View>
    );
  }
}

export default App;
