import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../componentes/CardConsulta/styles";
import skeletonPerLoading from "../../assets/shimmer.gif";

export function CardSkeletonLoading() {
  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        <Image source={skeletonPerLoading} style={[styles.foto, { overlayColor: "#FFFF" }]} />
        <View style={styles.informacoes}>
          <Image source={skeletonPerLoading} style={{ width: 200, height: 25, borderRadius: 8, overlayColor: '#FFFF' }} />
          <View style={styles.consultaArea}>
            <Image source={skeletonPerLoading} style={{ width: 150, height: 15, borderRadius: 4, overlayColor: '#FFFF', marginTop: 5 }} />
          </View>
        </View>
      </View>
      <View style={styles.informacoesAgendamento}>
        <Image source={skeletonPerLoading} style={{ width: 150, height: 15, borderRadius: 4, overlayColor: '#FFFF', marginTop: 5 }} />
        <Image source={skeletonPerLoading} style={[{ width: '100%', height: 50, borderRadius: 8, overlayColor: '#FFFF', marginTop: 5 }]} />
      </View>
    </View>
  );
}