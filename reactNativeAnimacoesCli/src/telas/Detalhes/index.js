import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import { InformacoesUsuario } from '../../componentes/InformacoesUsuario';
import Icon from 'react-native-vector-icons/MaterialIcons';
import mapa from '../../assets/mapa.png';
import styles from './styles';

export default function Detalhes(props) {
  let angulo = 30;
  const DURACAO_ANIMACAO = 100;
  const REPETICOES = 6;
  const dados = props.route.params;
  const rotacao = useSharedValue(0);
  const [notificacao, setNotificacao] = useState(false);

  const handleRotated = () => {
    rotacao.value = 30;
    rotacao.value = withRepeat(withTiming(-angulo, { duration: DURACAO_ANIMACAO }), REPETICOES, true, () => {
      rotacao.value = withTiming(0, { duration: DURACAO_ANIMACAO });
      runOnJS(setNotificacaoAtiva)(!notificacao);
    });

  }

  const setNotificacaoAtiva = (value) => {
    setNotificacao(value);
  };

  const estiloAnimado = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotacao.value}deg`
        }
      ]
    }

  });

  return (
    <TelaDeFundo>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <InformacoesUsuario
          nome={dados.nome}
          detalhes="Cliente desde 2018"
          foto={dados.foto}
        />
        <View style={styles.detalhesMedia}>
          <View style={styles.media}>
            <Text style={styles.subtitulo}>Tempo médio de cada consulta</Text>
            <View style={[styles.circulo, { borderColor: '#FFB050' }]}>
              <Text style={styles.circuloTexto}>52 min</Text>
            </View>
          </View>
          <View style={styles.media}>
            <Text style={styles.subtitulo}>Número de consultas</Text>
            <View style={styles.circulo}>
              <Text style={styles.circuloTexto}>22</Text>
            </View>
          </View>
        </View>


        <Text style={styles.subtitulo}>Anotações sobre a paciente</Text>
        <Text style={styles.detalhes}>{dados.sobre}</Text>

        <Text style={styles.subtitulo}>Endereço</Text>
        <Image style={styles.imagemMapa} source={mapa} />
        <Text>{dados.endereco}</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={handleRotated}
        >
          <Text style={styles.botaoTexto}>Notificar consulta</Text>
          <Animated.View
            style={[{
            }, estiloAnimado]}>
            <Icon
              name={notificacao ? 'notifications' : 'notifications-none'}
              size={20}
              color="#FFF"
            />
          </Animated.View>
        </TouchableOpacity>
      </ScrollView>
    </TelaDeFundo>
  )
}